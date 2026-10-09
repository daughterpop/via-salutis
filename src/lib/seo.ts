import { EMBER_EDITIONS, formatIssue, latestEdition, type EmberEdition } from "@/lib/ember";
import { ESSAYS, type Essay } from "@/lib/essays";
import { SISTER, SITE } from "@/lib/site";

/** Canonical production origin. vercel.app and the apex redirect/duplicate this host. */
export const SITE_URL = "https://www.via-salutis.com";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export function absoluteUrl(path: string) {
  if (path === "/" || path === "") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** "September 7, 2026" → "2026-09-07" (content dates are plain US long dates). */
export function isoDate(label: string) {
  const d = new Date(`${label} 12:00:00 UTC`);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString().slice(0, 10);
}

type PageMeta = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown>;
};

/**
 * Per-route head: title, description, canonical, Open Graph/Twitter, optional JSON-LD.
 * Child-route meta overrides the root's by name/property (TanStack dedupes deepest-first).
 */
export function pageHead({ title, description, path, type = "website", jsonLd }: PageMeta) {
  const url = absoluteUrl(path);
  const fullTitle = path === "/" ? title : `${title} · ${SITE.name}`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      ...(jsonLd ? [{ "script:ld+json": jsonLd }] : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

const PUBLISHER = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE.name,
  url: `${SITE_URL}/`,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` },
} as const;

/** Site-wide graph rendered from the root route. */
export const SITE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...PUBLISHER,
      description: SITE.description,
      sameAs: [SISTER.href],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE.name,
      alternateName: SITE.gloss,
      url: `${SITE_URL}/`,
      description: SITE.description,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

function articleJsonLd(opts: { headline: string; description: string; path: string; date?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: absoluteUrl(opts.path),
    mainEntityOfPage: absoluteUrl(opts.path),
    image: OG_IMAGE,
    inLanguage: "en-US",
    ...(opts.date ? { datePublished: opts.date, dateModified: opts.date } : {}),
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

export function essayHead(essay: Essay) {
  const path = `/essays/${essay.slug}`;
  return pageHead({
    title: essay.title,
    description: essay.excerpt,
    path,
    type: "article",
    jsonLd: articleJsonLd({ headline: essay.title, description: essay.excerpt, path, date: isoDate(essay.date) }),
  });
}

export function emberHead(edition: EmberEdition = latestEdition()) {
  const title = `Ember ${formatIssue(edition)}: ${edition.title}`;
  return pageHead({
    title,
    description: edition.lede,
    path: "/ember",
    type: "article",
    jsonLd: articleJsonLd({ headline: title, description: edition.lede, path: "/ember", date: isoDate(edition.dateLabel) }),
  });
}

/** Static, indexable routes. Keep in sync with src/routes when adding pages. */
export const STATIC_PATHS = ["/", "/fasting", "/essays", "/ember", "/shop", "/faq", "/about", "/contact"] as const;

export type SitemapEntry = { loc: string; lastmod?: string };

export function sitemapEntries(): SitemapEntry[] {
  const latestEmber = EMBER_EDITIONS[0] ? isoDate(EMBER_EDITIONS[0].dateLabel) : undefined;
  const essayDates = ESSAYS.map((e) => isoDate(e.date)).filter((d): d is string => !!d).sort();
  const latestEssay = essayDates[essayDates.length - 1];
  const newest = [latestEmber, latestEssay].filter((d): d is string => !!d).sort().pop();

  const lastmodFor: Record<string, string | undefined> = {
    "/": newest,
    "/ember": latestEmber,
    "/essays": latestEssay,
  };

  return [
    ...STATIC_PATHS.map((p) => ({ loc: absoluteUrl(p), lastmod: lastmodFor[p] })),
    ...ESSAYS.map((e) => ({ loc: absoluteUrl(`/essays/${e.slug}`), lastmod: isoDate(e.date) })),
  ];
}

export function sitemapXml(entries: SitemapEntry[] = sitemapEntries()) {
  const urls = entries
    .map(
      (e) =>
        `  <url>\n    <loc>${e.loc}</loc>${e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ""}\n  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
