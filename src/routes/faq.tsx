import { createFileRoute, Link } from "@tanstack/react-router";
import { SISTER } from "@/lib/site";

export const Route = createFileRoute("/faq")({ component: FaqPage });

const FAQS = [
  {
    q: "Is this medical advice?",
    a: "No. Fasting, sleep, and training are discussed as a Catholic rule of life. For diagnosis, medication, pregnancy, or an eating disorder, talk to a physician — and if food has become a battlefield, a priest as well.",
  },
  {
    q: "Do I have to fast like a monk?",
    a: "No. The floor for most Latin-rite Catholics is Friday abstinence and the two fast days of Ash Wednesday and Good Friday. Ember days are traditional, not currently required in the U.S. Start there. Add nothing until that is ordinary.",
  },
  {
    q: "Why supplements at all?",
    a: "Because a cellarer is not an abbot. Magnesium, vitamin D, electrolytes, a ring that tracks sleep — these can serve a household. They cannot consecrate it. The Shop page says when a link is an affiliate.",
  },
  {
    q: "How is this related to Via Fidelitatis?",
    a: "Same house, different matter. Via Fidelitatis is money so the vocation has margin. Via Salutis is the body so it can be a temple. The sites point at each other on purpose.",
  },
  {
    q: "What is Ember?",
    a: "A short Sunday letter: one fast, one food, one prayer. Named for the Ember days — four times a year the Church asks the household to fast for the harvest and for priests.",
  },
];

function FaqPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-sm font-medium text-accent">New here?</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-fg sm:text-4xl">Common questions</h1>
      <dl className="mt-8 space-y-6">
        {FAQS.map((item) => (
          <div key={item.q} className="rounded-2xl border border-border bg-surface p-5">
            <dt className="font-semibold text-fg">{item.q}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">{item.a}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 text-sm text-muted">
        Still looking for the money tools?{" "}
        <a href={SISTER.href} className="font-medium text-accent hover:underline" target="_blank" rel="noopener noreferrer">
          {SISTER.name}
        </a>
        {" · "}
        <Link to="/fasting" className="font-medium text-accent hover:underline">
          Fasting calendar
        </Link>
      </p>
    </main>
  );
}
