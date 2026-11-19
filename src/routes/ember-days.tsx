import { createFileRoute, Link } from "@tanstack/react-router";
import { GuideFaqList, GuideSection, linkClass } from "@/components/guide";
import { SubscribeForm } from "@/components/subscribe-form";
import { GUIDE_UPDATED, guideHead, type GuideFaq } from "@/lib/seo";

const FAQS: GuideFaq[] = [
  {
    q: "Are Ember days still required?",
    a: "Not in the United States. Since the 1969 calendar reform, the Church leaves Ember days to each bishops' conference, and the U.S. bishops have not made them obligatory. They remain a voluntary, traditional practice.",
  },
  {
    q: "When are the Ember days in December 2026?",
    a: "Wednesday, December 16, Friday, December 18, and Saturday, December 19, 2026: the Wednesday, Friday, and Saturday after the feast of St. Lucy on December 13.",
  },
  {
    q: "When are the Ember days in Lent 2027?",
    a: "Wednesday, February 17, Friday, February 19, and Saturday, February 20, 2027, in the week after the First Sunday of Lent.",
  },
  {
    q: "What do you eat on an Ember day?",
    a: "Traditionally, one full meal and two smaller ones that together do not equal it, with no meat on the Friday. In the U.S. before 1966, meat was allowed at the main meal only on Ember Wednesday and Saturday.",
  },
];

const DATES: Array<{ season: string; anchor: string; days: string; note?: string }> = [
  {
    season: "Advent 2026",
    anchor: "after St. Lucy, Dec 13",
    days: "Wed Dec 16 · Fri Dec 18 · Sat Dec 19",
  },
  {
    season: "Lent 2027",
    anchor: "after the First Sunday of Lent, Feb 14",
    days: "Wed Feb 17 · Fri Feb 19 · Sat Feb 20",
    note: "Falls in Lent, so Friday abstinence is required with no substitute.",
  },
  {
    season: "Pentecost 2027",
    anchor: "in the week after Pentecost, May 16",
    days: "Wed May 19 · Fri May 21 · Sat May 22",
  },
  {
    season: "September 2027",
    anchor: "after Holy Cross, Sept 14",
    days: "Wed Sep 15 · Fri Sep 17 · Sat Sep 18",
    note: "The 1962 calendar sets these after the third Sunday of September instead: Sep 22, 24, and 25.",
  },
  {
    season: "Advent 2027",
    anchor: "after St. Lucy, Dec 13",
    days: "Wed Dec 15 · Fri Dec 17 · Sat Dec 18",
  },
];

export const Route = createFileRoute("/ember-days")({
  head: () =>
    guideHead({
      title: "Ember Days 2026–2027: Dates and Rules",
      description:
        "Every Ember day for 2026 and 2027 (next: Dec 16, 18, 19, 2026), the traditional fast and abstinence, their current status in the U.S., and how a family can keep them.",
      path: "/ember-days",
      date: GUIDE_UPDATED,
      faqs: FAQS,
    }),
  component: EmberDaysPage,
});

function EmberDaysPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-sm font-medium text-accent">Dates and rules · 2026–2027</p>
      <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-fg sm:text-4xl">Ember Days</h1>
      <p className="mt-6 text-base leading-relaxed text-fg/90">
        Four times a year the Roman Church kept three days of fasting together: a Wednesday, a Friday, and a
        Saturday. These are the Ember days. They are no longer required in the United States, but they are old,
        simple, and still open to anyone. The next ones fall on <strong>December 16, 18, and 19, 2026</strong>.
      </p>

      <GuideSection title="Ember days 2026–2027">
        <div className="space-y-3">
          {DATES.map((d) => (
            <div key={d.season} className="rounded-2xl border border-border bg-surface p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-semibold text-fg">{d.season}</h3>
                <p className="text-xs text-muted">{d.anchor}</p>
              </div>
              <p className="mt-2 font-medium text-accent">{d.days}</p>
              {d.note && <p className="mt-2 text-sm leading-relaxed text-muted">{d.note}</p>}
            </div>
          ))}
        </div>
        <p className="text-sm text-muted">
          Earlier in 2026: February 25, 27, 28 (Lent); May 27, 29, 30 (Pentecost); September 16, 18, 19. The{" "}
          <Link to="/fasting" className={linkClass}>
            fasting calendar
          </Link>{" "}
          marks every Ember day as it comes.
        </p>
      </GuideSection>

      <GuideSection title="A short history">
        <p>
          The Ember days are Roman in origin. The Latin name is <em>Quattuor Tempora</em>, the four times, and they
          follow the turning of the year: winter, spring, summer, and the autumn harvest of grain, wine, and oil.
          Pope St. Leo the Great preached on them in the fifth century as an established custom of the Roman
          Church. The practice spread with the Roman liturgy, and by the eleventh century, under Pope Gregory VII,
          the dates were set for the whole Latin Church.
        </p>
        <p>
          The days carried two intentions: thanks to God for the fruits of the earth, and prayer for the clergy.
          Ordinations were traditionally held on Ember Saturdays, so the whole Church fasted in the same week its
          priests were made.
        </p>
      </GuideSection>

      <GuideSection title="The traditional rule">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Fast on all three days.</strong> One full meal, with two smaller meals that together do not equal
            it, for adults of fasting age.
          </li>
          <li>
            <strong>Abstinence on Friday.</strong> No meat.
          </li>
          <li>
            <strong>Partial abstinence on Wednesday and Saturday.</strong> In the U.S. before 1966, meat was
            permitted at the principal meal only.
          </li>
        </ul>
        <p>
          The days fall in Advent (after St. Lucy, December 13), in Lent (after the First Sunday of Lent), in the
          week after Pentecost, and in September (after Holy Cross, September 14).
        </p>
      </GuideSection>

      <GuideSection title="What applies now">
        <p>
          In the 1969 reform of the calendar, Ember and Rogation days were left to each bishops&rsquo; conference
          to set as it judged best. The U.S. bishops have not made them obligatory. No one in the U.S. is bound to
          fast on an Ember day, and skipping one is no sin.
        </p>
        <p>
          What does still apply is Friday. Ember Friday is a Friday like any other: abstinence from meat for those
          14 and older, or, in the U.S. outside Lent, another act of penance approved by the bishops in its place.
          In Lent there is no substitute. The traditional Latin Mass (1962 Missal) keeps the Ember days in its
          liturgy, with their own readings.
        </p>
      </GuideSection>

      <GuideSection title="How a family can keep them">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Adults in ordinary health choose one, two, or all three days and fast as on Ash Wednesday. Begin with
            one.
          </li>
          <li>Everyone 14 and older keeps Friday meatless.</li>
          <li>
            Children do not fast. Give them a small sacrifice for the three days and a short prayer for priests and
            seminarians.
          </li>
          <li>Pray at supper for the priests of your parish and for those who will be ordained.</li>
          <li>Thank God for the season&rsquo;s food, and give what the fast saves to the poor.</li>
          <li>Go to a weekday Mass on one of the days if you can.</li>
        </ul>
        <p className="text-sm text-muted">
          Pregnant and nursing mothers, the sick, the elderly, and anyone for whom food is already a struggle are
          not called to this fast. Talk to a priest and a doctor. This is a rule of prayer, not medical advice.
        </p>
        <p>
          The December Ember days fall in the third week of Advent. For the rest of the season, see{" "}
          <Link to="/advent" className={linkClass}>
            how to fast in Advent
          </Link>
          .
        </p>
      </GuideSection>

      <GuideSection title="Common questions">
        <GuideFaqList faqs={FAQS} />
      </GuideSection>

      <div className="mt-10">
        <p className="text-base leading-relaxed text-fg/90">
          The Sunday letter here is named for these days: one fast, one food, and one prayer for the week ahead.
        </p>
        <SubscribeForm />
      </div>

      <div className="mt-10 border-t border-border pt-8 text-sm text-muted">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">Further reading</p>
        <ul className="mt-3 space-y-2">
          <li>
            <Link to="/advent" className={linkClass}>
              How to fast in Advent: a Catholic guide (2026)
            </Link>
          </li>
          <li>
            <Link to="/fasting" className={linkClass}>
              The fasting calendar
            </Link>
          </li>
          <li>
            <Link to="/ember" className={linkClass}>
              This week&rsquo;s Ember letter
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
