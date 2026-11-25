import { createFileRoute, Link } from "@tanstack/react-router";
import { GuideFaqList, GuideSection, linkClass } from "@/components/guide";
import { SubscribeForm } from "@/components/subscribe-form";
import { GUIDE_UPDATED, guideHead, type GuideFaq } from "@/lib/seo";
import { SISTER } from "@/lib/site";
import { withUtm } from "@/lib/utm";

const FAQS: GuideFaq[] = [
  {
    q: "When is Lent 2027?",
    a: "Lent 2027 begins on Ash Wednesday, February 10, and ends before the evening Mass of the Lord's Supper on Holy Thursday, March 25. Easter Sunday is March 28.",
  },
  {
    q: "What are the required fasting days in Lent 2027?",
    a: "In the U.S. Latin Church, only Ash Wednesday (February 10) and Good Friday (March 26) are days of fasting and abstinence for those of age. Fridays of Lent require abstinence from meat for those 14 and older.",
  },
  {
    q: "Who must fast on Ash Wednesday and Good Friday?",
    a: "Latin Catholics ages 18 to 59 must fast: one full meal and two smaller meals that together do not equal a full meal. Those 14 and older must also abstain from meat on those days.",
  },
  {
    q: "Is there abstinence on March 19, 2027?",
    a: "No. March 19 is the Solemnity of St. Joseph and falls on a Friday. Solemnities lift the Friday abstinence obligation (canon 1251).",
  },
  {
    q: "Are Ember days required in Lent 2027?",
    a: "No. The Ember days of Lent 2027 (February 17, 19, and 20) remain voluntary in the United States, though Friday abstinence still applies on February 19.",
  },
];

const KEY_DATES: Array<{ date: string; label: string; note: string }> = [
  { date: "February 9", label: "Shrove Tuesday", note: "The day before Ash Wednesday." },
  { date: "February 10", label: "Ash Wednesday", note: "Fast and abstinence. Lent begins." },
  { date: "February 14", label: "First Sunday of Lent", note: "" },
  { date: "February 17, 19, 20", label: "Lenten Ember days", note: "Voluntary traditional fast." },
  { date: "March 7", label: "Laetare Sunday", note: "Fourth Sunday of Lent." },
  { date: "March 19", label: "St. Joseph", note: "Solemnity on a Friday: no abstinence." },
  { date: "March 21", label: "Palm Sunday", note: "Holy Week begins." },
  { date: "March 25", label: "Holy Thursday", note: "Lent ends at the evening Mass of the Lord's Supper." },
  { date: "March 26", label: "Good Friday", note: "Fast and abstinence." },
  { date: "March 28", label: "Easter Sunday", note: "" },
];

export const Route = createFileRoute("/lent")({
  head: () =>
    guideHead({
      title: "Lent 2027: Catholic fasting rules and dates",
      description:
        "Ash Wednesday is February 10, Good Friday March 26, Easter March 28, 2027. Exact U.S. Latin Church rules for fasting and abstinence, key dates, and a plain household plan.",
      path: "/lent",
      date: GUIDE_UPDATED,
      faqs: FAQS,
    }),
  component: LentPage,
});

function LentPage() {
  const sisterHref = withUtm(SISTER.href, {
    source: "viasalutis",
    medium: "referral",
    campaign: "lent",
  });

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-sm font-medium text-accent">A Catholic guide · Lent 2027</p>
      <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-fg sm:text-4xl">
        Lent 2027: Catholic fasting rules and dates
      </h1>
      <p className="mt-4 border-l-2 border-gold pl-4 text-sm leading-relaxed text-muted italic">
        Behold, now is the acceptable time; behold, now is the day of salvation. — 2 Corinthians 6:2
      </p>
      <p className="mt-6 text-base leading-relaxed text-fg/90">
        Lent 2027 begins on <strong>Ash Wednesday, February 10</strong>, and ends before the evening Mass of the
        Lord's Supper on <strong>Holy Thursday, March 25</strong>. Easter Sunday is <strong>March 28</strong>.
        The Church asks two things that bind: fasting and abstinence on Ash Wednesday and Good Friday, and
        abstinence on the Fridays of Lent. Everything else is open.
      </p>

      <GuideSection title="Key dates for Lent 2027">
        <div className="space-y-3">
          {KEY_DATES.map((d) => (
            <div key={d.date} className="rounded-2xl border border-border bg-surface p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">{d.date}</p>
              <h3 className="mt-1 font-semibold text-fg">{d.label}</h3>
              {d.note && <p className="mt-1 text-sm leading-relaxed text-muted">{d.note}</p>}
            </div>
          ))}
        </div>
      </GuideSection>

      <GuideSection title="What the Church asks in Lent">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Ash Wednesday and Good Friday are days of fasting and abstinence.</strong> Latin Catholics
            ages 18 to 59 fast: one full meal and two smaller meals that together do not equal a full meal. No
            eating between meals. Those 14 and older abstain from meat. Ages: fasting binds from the 18th birthday
            until the beginning of the 60th year.
          </li>
          <li>
            <strong>Fridays of Lent are days of abstinence.</strong> Everyone 14 and older abstains from meat.
            In the U.S. outside Lent a bishop-approved penance may replace Friday abstinence, but not during Lent.
            The Fridays of Lent 2027 are February 12, 19, 26, March 5, 12, and 26 (Good Friday). March 19 is a
            solemnity and does not require abstinence.
          </li>
          <li>
            <strong>No other fast is required.</strong> Ember days in Lent (February 17, 19, 20) are voluntary.
            Traditional practices such as giving up a food or comfort for the whole season are optional.
          </li>
          <li>
            <strong>The Eucharistic fast</strong> remains one hour before Communion.
          </li>
          <li>
            Pregnant and nursing mothers, the sick, the elderly, and anyone for whom food is already a struggle
            are not bound. The Church has always dispensed. This is not medical advice.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="A plain household plan">
        <p>
          Children do not fast and are not bound to abstinence until 14. Parents form them in the sense of penance
          (canon 1252). Never take a meal from a child.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Adults of fasting age keep the two required fast days as the Church asks.</li>
          <li>Everyone 14 and older keeps every Friday of Lent meatless.</li>
          <li>Choose one voluntary penance for the season and keep it quietly until Holy Thursday.</li>
          <li>Pray the Stations of the Cross once a week if the parish offers them, or at home.</li>
          <li>Give the money saved by the fast to the poor or the parish.</li>
          <li>Go to confession before Easter.</li>
        </ul>
        <p className="text-sm text-muted">
          If fasting has become a way to punish the body, leave it aside and talk to a priest and a doctor.
        </p>
      </GuideSection>

      <GuideSection title="Common questions">
        <GuideFaqList faqs={FAQS} />
      </GuideSection>

      <div className="mt-10">
        <p className="text-base leading-relaxed text-fg/90">
          Ember is a short Sunday letter: one fast, one food, and one prayer for the week ahead. It keeps the season with you.
        </p>
        <SubscribeForm />
      </div>

      <div className="mt-10 border-t border-border pt-8 text-sm leading-relaxed text-muted">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">Further reading</p>
        <ul className="mt-3 space-y-2">
          <li>
            <Link to="/fasting" className={linkClass}>
              The fasting calendar, day by day
            </Link>
          </li>
          <li>
            <Link to="/ember-days" className={linkClass}>
              Ember Days 2026–2027: dates and rules
            </Link>
          </li>
          <li>
            <Link to="/advent" className={linkClass}>
              How to fast in Advent
            </Link>
          </li>
        </ul>
        <p className="mt-6">
          If the Lenten budget is what crowds out prayer, the sister site{" "}
          <a href={sisterHref} className={linkClass} target="_blank" rel="noopener noreferrer">
            {SISTER.name}
          </a>{" "}
          has calculators and writing for that side of the house.
        </p>
      </div>
    </main>
  );
}
