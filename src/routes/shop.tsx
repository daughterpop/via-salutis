import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { liveReferrals, recommendedReferrals } from "@/lib/referrals";
import { SISTER } from "@/lib/site";

export const Route = createFileRoute("/shop")({ component: ShopPage });

function ShopPage() {
  const live = liveReferrals();
  const recommended = recommendedReferrals();

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-sm font-medium text-accent">The cellar</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-fg sm:text-4xl">Things we actually use</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Supplements, sleep, and the training you actually do — with the
        referral perk written in the open. No protocol. No medical claims. Money tools live on{" "}
        <a href={SISTER.href} className="font-medium text-accent hover:underline" target="_blank" rel="noopener noreferrer">
          {SISTER.name}
        </a>
        .
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-fg">Live referrals</h2>
      <p className="mt-2 text-sm text-muted">Codes and links we actually have. Use them; the house may earn a commission.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {live.map((item) => (
          <article key={item.id} className="flex flex-col rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-gold">{item.categories[0]}</p>
            <h3 className="mt-2 text-lg font-semibold text-fg">{item.cardEyebrow}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.cardBody}</p>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-4 inline-flex items-center gap-2 self-start rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-surface hover:bg-accent-hover"
            >
              {item.cardCta}
              <ExternalLink size={14} />
            </a>
          </article>
        ))}
      </div>

      <h2 className="mt-12 font-display text-xl font-semibold text-fg">Worth adding</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        The next shelf for a Catholic household: electrolytes for a longer fast, clinical vitamins, a real
        prenatal, meat for feast days, and a prayer app. Honest product pages — no invented discounts.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {recommended.map((item) => (
          <article key={item.id} className="flex flex-col rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-gold">{item.categories[0]}</p>
            <h3 className="mt-2 text-lg font-semibold text-fg">{item.cardEyebrow}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.cardBody}</p>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 self-start rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-surface hover:bg-accent-hover"
            >
              {item.cardCta}
              <ExternalLink size={14} />
            </a>
          </article>
        ))}
      </div>

      <p className="mt-8 text-sm leading-relaxed text-muted">
        Some links are affiliate referrals. If you use them, Via Salutis may earn a commission at no extra cost to you.
        This is not medical advice; talk to a physician before you change diet, fasting, or supplements.
      </p>
      <p className="mt-3 text-sm">
        <Link to="/fasting" className="font-medium text-accent hover:underline">
          Back to the fast
        </Link>
      </p>
    </main>
  );
}
