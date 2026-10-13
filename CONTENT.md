# CONTENT.md — Via Salutis publishing guide

How content gets published on via-salutis.com. All content lives in TypeScript
data files under `src/lib/` — there is no CMS and no content automation.
Edit a data file, open a PR, merge, Vercel deploys.

## Adding an essay

1. Open `src/lib/essays.ts`.
2. Prepend a new entry to `ESSAYS` (newest first):
   ```ts
   {
     slug: "my-new-essay",          // URL-safe, unique, kebab-case
     title: "The essay title",
     excerpt: "One or two sentences — used for meta description, cards, and the RSS feed.",
     date: "October 18, 2026",     // US long date, parsed by isoDate()
     tags: ["Fasting", "Rule"],     // shown on cards; first two only
     verse: "Optional scripture line — 1 Cor 6:19",
     body: ["First paragraph.", "Second paragraph."],
   },
   ```
3. URL will be `/essays/my-new-essay`. Meta tags, JSON-LD, sitemap, and RSS
   pick it up automatically — no other file needs editing.
4. Checklist: unique slug, valid date, excerpt under ~160 chars, body has no
   unescaped backticks.

## Publishing a new Ember issue

1. Open `src/lib/ember.ts`.
2. Prepend a new entry to `EMBER_EDITIONS` (newest first, `issue` increments):
   ```ts
   {
     slug: "issue-slug",            // URL-safe, unique
     issue: 6,
     title: "Issue title",
     lede: "One or two sentences — meta description and RSS.",
     dateLabel: "October 18, 2026",
     sundayLabel: "29th Sunday in Ordinary Time",
     lanes: [
       { lane: "fast", title: "…" },
       { lane: "food", title: "…" },
       { lane: "prayer", title: "…" },
     ],
     body: ["First paragraph.", "Second paragraph."],
   },
   ```
3. The issue appears at `/ember/issue-slug`, is linked from the "Past issues"
   section on `/ember`, and is included in the sitemap and RSS feed
   automatically. `/ember` always shows the newest issue.
4. Checklist: `issue` number is one more than the previous, `dateLabel` is a
   valid US long date, lanes cover fast/food/prayer in that order.

## Field reference

| File | Export | Key fields |
|---|---|---|
| `src/lib/essays.ts` | `ESSAYS`, `essayBySlug`, `ESSAY_SEQUENCE` | slug, title, excerpt, date, tags, verse?, body[] |
| `src/lib/ember.ts` | `EMBER_EDITIONS`, `latestEdition`, `editionBySlug`, `formatIssue`, `laneLabel` | slug, issue, title, lede, dateLabel, sundayLabel, lanes[], body[] |
| `src/lib/seo.ts` | `pageHead`, `essayHead`, `emberHead`, `sitemapEntries`, `sitemapXml`, `feedEntries`, `feedXml`, `STATIC_PATHS` | — |
| `src/lib/site.ts` | `SITE`, `SISTER`, `NAV`, `FOOTER_NAV` | site name, tagline, links |

## Notes

- `ESSAY_SEQUENCE` (in `essays.ts`) drives the homepage "Read the sequence"
  list. Reorder or relabel there — never hardcode slugs in route components.
- `STATIC_PATHS` (in `seo.ts`) lists static routes for the sitemap. Keep in
  sync with `src/routes/` when adding a static page. Dynamic routes
  (`/essays/$slug`, `/ember/$slug`) are added to the sitemap automatically.
- The subscribe form (`SubscribeForm`) posts to FormSubmit, which emails the
  site owner — there is no mailing-list provider behind the "one email on
  Sunday" copy. Wiring a real provider is a separate decision.
