import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { allEmberDays, MONTHS, civilNow, monthGrid, ruleForDate, type DayRule } from "@/lib/fasting";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/fasting")({ component: FastingPage });

function FastingPage() {
  const now = civilNow();
  const [cursor, setCursor] = useState({ year: now.getFullYear(), month: now.getMonth() });
  const [selected, setSelected] = useState<DayRule>(() => ruleForDate(now));
  const cells = useMemo(() => monthGrid(cursor.year, cursor.month), [cursor]);
  const emberYear = allEmberDays(cursor.year);
  const today = ruleForDate(now);

  const shift = (delta: number) => {
    setCursor((c) => {
      const d = new Date(c.year, c.month + delta, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-sm font-medium text-accent">The rule</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-fg sm:text-4xl">Keep the Church’s fast</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        This is the calculator’s twin: one honest look at the week. Friday abstinence, Ember days, Lent.
        Not a cleanse. Not keto. If fasting has become a way to punish the body, stop — talk to a priest and a doctor.
      </p>

      <div className="mt-8 rounded-2xl border border-accent-soft bg-accent-soft/40 p-5 sm:p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-accent">Today</p>
        <h2 className="mt-1 text-xl font-bold text-fg">{today.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{today.detail}</p>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-surface p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => shift(-1)}
            className="min-h-11 rounded-xl px-3 text-sm font-medium text-accent hover:bg-accent-soft"
          >
            Previous
          </button>
          <h2 className="font-display text-lg font-semibold sm:text-xl">
            {MONTHS[cursor.month]} {cursor.year}
          </h2>
          <button
            type="button"
            onClick={() => shift(1)}
            className="min-h-11 rounded-xl px-3 text-sm font-medium text-accent hover:bg-accent-soft"
          >
            Next
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold uppercase tracking-wide text-muted sm:text-xs">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="py-2">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {cells.map((cell, i) => {
            if (!cell) return <div key={`e-${i}`} />;
            const marked = cell.kind !== "none";
            const isSelected =
              selected.date.getDate() === cell.date.getDate() &&
              selected.date.getMonth() === cell.date.getMonth() &&
              selected.date.getFullYear() === cell.date.getFullYear();
            const isToday =
              today.date.getDate() === cell.date.getDate() &&
              today.date.getMonth() === cell.date.getMonth() &&
              today.date.getFullYear() === cell.date.getFullYear();
            return (
              <button
                key={cell.date.toISOString()}
                type="button"
                onClick={() => setSelected(cell)}
                className={cn(
                  "min-h-11 rounded-lg text-sm font-medium",
                  isSelected && "bg-accent text-surface",
                  !isSelected && marked && "bg-accent-soft text-accent",
                  !isSelected && !marked && cell.inLent && "bg-gold/10 text-fg",
                  !isSelected && !marked && !cell.inLent && "text-fg hover:bg-bg",
                  isToday && !isSelected && "ring-1 ring-gold",
                )}
              >
                {cell.date.getDate()}
              </button>
            );
          })}
        </div>
        <div className="mt-5 border-t border-border pt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            {selected.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-fg">{selected.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{selected.detail}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <section className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="font-semibold text-fg">The floor</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
            <li>Ages 14+: no meat on Fridays.</li>
            <li>Ages 18–59: Ash Wednesday and Good Friday are fast and abstinence.</li>
            <li>Eucharistic fast: one hour before Communion.</li>
            <li>
              Ember days {cursor.year} (traditional, not required in the U.S.):
              <ul className="mt-2 space-y-1 pl-4">
                {emberYear.map((season) => (
                  <li key={season.season}>
                    <span className="font-medium text-fg">{season.season}:</span>{" "}
                    {season.days.map((d) => d.toLocaleDateString("en-US", { month: "short", day: "numeric" })).join(", ")}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </section>
        <section className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="font-semibold text-fg">Who should not</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Pregnant and nursing mothers, the sick, the poor in food, and anyone for whom food is already a war
            are not called to this ascesis. The Church has always dispensed. That is mercy, not softness.
          </p>
        </section>
      </div>

      <p className="mt-8 text-sm text-muted">
        Next:{" "}
        <Link
          to="/essays/$slug"
          params={{ slug: "fasting-is-not-keto" }}
          className="font-medium text-accent hover:underline"
        >
          Fasting is not keto
        </Link>
        {" · "}
        <Link to="/shop" className="font-medium text-accent hover:underline">
          The cellar
        </Link>
      </p>
    </main>
  );
}
