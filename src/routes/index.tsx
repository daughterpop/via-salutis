import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame } from "lucide-react";
import { EmberBand } from "@/components/ember-band";
import { SubscribeForm } from "@/components/subscribe-form";
import { ESSAYS } from "@/lib/essays";
import { civilNow, ruleForDate } from "@/lib/fasting";
import { SITE, SISTER } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

const SEQUENCE = [
  { slug: "temple-not-a-project", label: "Temple, not a project" },
  { slug: "fasting-is-not-keto", label: "Fasting is not keto" },
  { slug: "hildegard-viriditas", label: "Hildegard’s viriditas" },
] as const;

function Home() {
  const recent = ESSAYS.slice(0, 3);
  const today = ruleForDate(civilNow());

  return (
    <main>
      <div className="border-b border-border bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-10 text-center sm:px-6 sm:py-14">
          <p className="mb-3 text-sm font-medium text-accent">
            For Catholic households making the body a temple
          </p>
          <h1 className="mb-4 font-display text-3xl font-semibold leading-tight text-fg sm:text-4xl md:text-5xl">
            Glorify God in your body
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            <span className="font-semibold text-fg">{SITE.name}</span> means “{SITE.gloss}.”
            Tools and writing so fasting, sleep, and food stop crowding out Mass, kids, and prayer.
          </p>
          <Link
            to="/fasting"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-surface shadow-sm hover:bg-accent-hover sm:text-base"
          >
            <Flame size={18} />
            See this week’s fast
          </Link>
          <p className="mt-5 text-sm text-muted">
            <Link to="/faq" className="font-medium text-accent underline-offset-2 hover:underline">
              Common questions
            </Link>
            <span className="text-border"> · </span>
            <Link to="/essays" className="font-medium text-accent underline-offset-2 hover:underline">
              Essays
            </Link>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6">
        <Link
          to="/fasting"
          className="block rounded-2xl border border-accent-soft bg-accent-soft/40 p-5 transition-shadow hover:shadow-md sm:p-6"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-accent">Today’s rule</p>
          <h2 className="mt-1 text-xl font-bold text-fg">{today.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{today.detail}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
            Open the calendar <ArrowRight size={14} />
          </span>
        </Link>
      </div>

      <div className="mx-auto max-w-4xl space-y-6 px-4 py-10 sm:px-6 sm:py-12">
        <h2 className="text-center text-xl font-bold text-fg sm:text-2xl">A simple path</h2>

        <Link
          to="/fasting"
          className="group relative block rounded-2xl border border-border bg-surface p-6 transition-shadow hover:border-accent-soft hover:shadow-md"
        >
          <div className="absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-sm font-bold text-surface shadow-sm">
            1
          </div>
          <h3 className="mt-1 mb-2 text-lg font-semibold text-fg">Keep the fast</h3>
          <p className="mb-3 text-sm leading-relaxed text-muted">
            Friday abstinence, Ember days, Lent. One honest rule is usually enough to see the next step.
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
            Open the fasting calendar <ArrowRight size={14} />
          </span>
        </Link>

        <div className="relative rounded-2xl border border-border bg-surface p-6">
          <div className="absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-sm font-bold text-surface shadow-sm">
            2
          </div>
          <h3 className="mt-1 mb-2 text-lg font-semibold text-fg">Read the sequence</h3>
          <p className="mb-4 text-sm leading-relaxed text-muted">
            How we treat the body when you want more than a supplement stack.
          </p>
          <Link
            to="/essays/$slug"
            params={{ slug: "temple-not-a-project" }}
            className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            Start with the temple <ArrowRight size={14} />
          </Link>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted">
            {SEQUENCE.map((item, i) => (
              <span key={item.slug} className="inline-flex items-center gap-3">
                {i > 0 && <span className="text-border">·</span>}
                <Link to="/essays/$slug" params={{ slug: item.slug }} className="text-accent hover:underline">
                  {item.label}
                </Link>
              </span>
            ))}
          </div>
        </div>

        <div className="relative pt-3">
          <div className="absolute top-0 left-6 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-sm font-bold text-surface shadow-sm">
            3
          </div>
          <EmberBand compact />
        </div>
      </div>

      <div className="mx-auto max-w-4xl border-t border-border px-4 py-10 sm:px-6 sm:py-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-fg sm:text-2xl">From the essays</h2>
          <Link to="/essays" className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {recent.map((post) => (
            <Link
              key={post.slug}
              to="/essays/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-5 transition-shadow hover:border-accent-soft hover:shadow-md"
            >
              <div className="mb-3 flex flex-wrap gap-1.5">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mb-2 text-[15px] leading-snug font-semibold text-fg group-hover:text-accent">
                {post.title}
              </h3>
              <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              <div className="mt-3 flex justify-between border-t border-border pt-3 text-xs text-muted">
                <span>{post.date}</span>
                <span className="font-medium text-accent">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 pb-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-gold">Two roads, one house</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-fg">Fidelity with money. Salus with the body.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {SITE.name} is the sibling of{" "}
            <a href={SISTER.href} className="font-medium text-accent underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">
              {SISTER.name}
            </a>
            . Same vocation. Different matter. Clear the numbers on one side; keep the flesh a fit tabernacle on the other.
          </p>
          <a
            href={SISTER.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            Visit {SISTER.name} <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <div className="px-4 pb-10 sm:px-6">
        <SubscribeForm />
      </div>
    </main>
  );
}
