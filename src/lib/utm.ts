/**
 * Append lowercase UTM tags to an outbound URL we share off-site.
 * Do not use this on internal Via Salutis links, canonical URLs, or sitemap entries.
 */
export function withUtm(
  url: string,
  params: { source: string; medium: string; campaign: string },
): string {
  const parsed = new URL(url);
  const query = new URLSearchParams(parsed.search);
  query.set("utm_source", params.source.toLowerCase());
  query.set("utm_medium", params.medium.toLowerCase());
  query.set("utm_campaign", params.campaign.toLowerCase());
  const search = query.toString();
  const rawPath = url.split(/[?#]/, 1)[0] ?? url;
  const pathname = parsed.pathname === "/" && !rawPath.endsWith("/") ? "" : parsed.pathname;
  return `${parsed.origin}${pathname}${search ? `?${search}` : ""}${parsed.hash}`;
}

/** Campaign slug for a site path: "/" → "home", "/advent" → "advent", "/essays/foo" → "foo". */
export function campaignFromPath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, "") || "/";
  if (trimmed === "/") return "home";
  const last = trimmed.split("/").filter(Boolean).pop() ?? "home";
  return last.toLowerCase();
}
