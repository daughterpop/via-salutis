import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE, SISTER } from "@/lib/site";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-sm font-medium text-accent">The house</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-fg sm:text-4xl">{SITE.name}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Latin for “{SITE.gloss}.” <em>Salus</em> is the old word that refuses to split health from salvation.
      </p>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-fg/90">
        <p>
          Paul writes that the body is a temple of the Holy Spirit, and that you were bought at a price. The
          Christian answer to wellness culture is not another stack. It is reverence: fasting when the Church
          fasts, sleeping as an act of trust, eating as if the table were already an altar.
        </p>
        <p>
          This site is the sibling of{" "}
          <a href={SISTER.href} className="font-medium text-accent hover:underline" target="_blank" rel="noopener noreferrer">
            {SISTER.name}
          </a>
          , which does the same work with money. One household. Two roads. Fidelity with the ledger; <em>salus</em> with
          the flesh — so neither crowds out Mass, children, or generosity.
        </p>
        <p>
          The tools are small on purpose. A fasting calendar. A Sunday letter called Ember. Essays that will not
          call a diet a mystagogy. A cellar of products we use, with the referral written in the open.
        </p>
        <p>
          Nothing here is medical advice, and nothing here is a substitute for the sacraments. If you are ill, go
          to a doctor. If you are in sin, go to confession. The temple is cleaned that way.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Link to="/fasting" className="rounded-2xl border border-border bg-surface p-5 hover:border-accent-soft">
          <p className="font-semibold text-fg">Fasting calendar</p>
          <p className="mt-1 text-sm text-muted">Friday, Ember, Lent — the floor of the rule.</p>
        </Link>
        <a
          href={SISTER.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-border bg-surface p-5 hover:border-accent-soft"
        >
          <p className="font-semibold text-fg">{SISTER.name}</p>
          <p className="mt-1 text-sm text-muted">{SISTER.tagline}</p>
        </a>
      </div>
    </main>
  );
}
