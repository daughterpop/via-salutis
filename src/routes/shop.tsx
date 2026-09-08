import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { REFERRALS } from "@/lib/referrals";

export const Route = createFileRoute("/shop")({ component: ShopPage });

function ShopPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-sm font-medium text-accent">The cellar</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-fg sm:text-4xl">Things we actually use</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Supplements and gear are the cellarer, not the abbot. Sleep, food, training, books — with the referral perk
        written in the open. No protocol. No medical claims.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {REFERRALS.map((item) => (
          <article key={item.id} className="flex flex-col rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-gold">{item.categories[0]}</p>
            <h2 className="mt-2 text-lg font-semibold text-fg">{item.cardEyebrow}</h2>
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

      <p className="mt-8 text-sm leading-relaxed text-muted">
        Some links are affiliate referrals. If you use them, Via Salutis may earn a commission at no extra cost to you.
        This is not medical advice; talk to a physician before you change diet, fasting, or training.
      </p>
      <p className="mt-3 text-sm">
        <Link to="/fasting" className="font-medium text-accent hover:underline">
          Back to the fast
        </Link>
      </p>
    </main>
  );
}
