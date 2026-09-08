import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { formatIssue, laneLabel, latestEdition } from "@/lib/ember";

export function EmberBand({ compact = false }: { compact?: boolean }) {
  const latest = latestEdition();

  return (
    <div className="rounded-2xl border border-accent-soft bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[1.5px] text-accent sm:text-xs">
        Ember · {formatIssue(latest)} · Sundays
      </p>
      {!compact && <p className="mb-2 text-xs text-muted">{latest.sundayLabel}</p>}
      <h2 className="text-xl font-bold leading-snug text-fg sm:text-2xl">{latest.title}</h2>
      {!compact && (
        <p className="mt-2 mb-4 text-sm leading-relaxed text-muted sm:text-base">{latest.lede}</p>
      )}
      <ul className={compact ? "mt-3 mb-4 space-y-2" : "mb-5 space-y-2"}>
        {latest.lanes.map((lane) => (
          <li key={lane.lane} className="flex items-start gap-2 text-sm text-fg">
            <span className="mt-0.5 shrink-0 rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
              {laneLabel(lane.lane)}
            </span>
            <span className="leading-snug">{lane.title}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/ember"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-surface hover:bg-accent-hover"
      >
        Read this week <ArrowRight size={16} />
      </Link>
    </div>
  );
}
