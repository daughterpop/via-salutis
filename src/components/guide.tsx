import type { ReactNode } from "react";
import type { GuideFaq } from "@/lib/seo";

export function GuideSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-semibold text-fg">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-fg/90">{children}</div>
    </section>
  );
}

export function GuideFaqList({ faqs }: { faqs: GuideFaq[] }) {
  return (
    <dl className="space-y-4">
      {faqs.map((f) => (
        <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
          <dt className="font-semibold text-fg">{f.q}</dt>
          <dd className="mt-2 text-sm leading-relaxed text-muted">{f.a}</dd>
        </div>
      ))}
    </dl>
  );
}

export const linkClass = "font-medium text-accent hover:underline";
