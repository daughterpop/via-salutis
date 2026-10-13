import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SubscribeForm } from "@/components/subscribe-form";
import { emberHead } from "@/lib/seo";
import { EMBER_EDITIONS, editionBySlug, formatIssue, laneLabel } from "@/lib/ember";

export const Route = createFileRoute("/ember/$slug")({
  loader: ({ params }) => {
    const edition = editionBySlug(params.slug);
    if (!edition) throw notFound();
    return edition;
  },
  head: ({ loaderData }) => (loaderData ? emberHead(loaderData, `/ember/${loaderData.slug}`) : {}),
  component: EmberIssuePage,
});

function EmberIssuePage() {
  const edition = Route.useLoaderData();
  const others = EMBER_EDITIONS.filter((e) => e.slug !== edition.slug);

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12">
      <Link to="/ember" className="text-sm font-medium text-accent hover:underline">
        ← Ember
      </Link>
      <p className="mt-5 text-[10px] font-semibold uppercase tracking-[1.5px] text-accent">
        Ember · {formatIssue(edition)} · Sundays
      </p>
      <p className="mt-2 text-xs text-muted">{edition.sundayLabel}</p>
      <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-fg sm:text-4xl">{edition.title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">{edition.lede}</p>
      <ul className="mt-6 space-y-3">
        {edition.lanes.map((lane) => (
          <li key={lane.lane} className="flex items-start gap-3 text-sm text-fg">
            <span className="mt-0.5 shrink-0 rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
              {laneLabel(lane.lane)}
            </span>
            <span className="leading-snug">{lane.title}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-fg/90">
        {edition.body.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
      <p className="mt-8 text-sm">
        <Link to="/fasting" className="font-medium text-accent hover:underline">
          Open this week’s calendar
        </Link>
      </p>
      {others.length > 0 && (
        <div className="mt-10 border-t border-border pt-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Past issues</p>
          <ul className="mt-3 space-y-2">
            {others.map((issue) => (
              <li key={issue.slug}>
                <Link
                  to="/ember/$slug"
                  params={{ slug: issue.slug }}
                  className="font-medium text-accent hover:underline"
                >
                  {formatIssue(issue)}: {issue.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <SubscribeForm />
    </main>
  );
}
