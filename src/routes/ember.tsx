import { createFileRoute, Link } from "@tanstack/react-router";
import { SubscribeForm } from "@/components/subscribe-form";
import { formatIssue, laneLabel, latestEdition } from "@/lib/ember";

export const Route = createFileRoute("/ember")({ component: EmberPage });

function EmberPage() {
  const latest = latestEdition();

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-accent">
        Ember · {formatIssue(latest)} · Sundays
      </p>
      <p className="mt-2 text-xs text-muted">{latest.sundayLabel}</p>
      <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-fg sm:text-4xl">{latest.title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">{latest.lede}</p>
      <ul className="mt-6 space-y-3">
        {latest.lanes.map((lane) => (
          <li key={lane.lane} className="flex items-start gap-3 text-sm text-fg">
            <span className="mt-0.5 shrink-0 rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
              {laneLabel(lane.lane)}
            </span>
            <span className="leading-snug">{lane.title}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-fg/90">
        {latest.body.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
      <p className="mt-8 text-sm">
        <Link to="/fasting" className="font-medium text-accent hover:underline">
          Open this week’s calendar
        </Link>
      </p>
      <SubscribeForm />
    </main>
  );
}
