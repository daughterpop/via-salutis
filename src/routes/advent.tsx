import { createFileRoute, Link } from "@tanstack/react-router";
import { GuideFaqList, GuideSection, linkClass } from "@/components/guide";
import { SubscribeForm } from "@/components/subscribe-form";
import { GUIDE_UPDATED, guideHead, type GuideFaq } from "@/lib/seo";
import { SISTER } from "@/lib/site";

const FAQS: GuideFaq[] = [
  {
    q: "Do Catholics have to fast during Advent?",
    a: "No. In the Latin Church in the United States there is no required fast in Advent. Friday abstinence (or, outside Lent, another act of penance approved by the U.S. bishops) still applies on every Friday of the season.",
  },
  {
    q: "Is Advent a penitential season?",
    a: "Not in the way Lent is. Church law names Lent and the Fridays of the year as the penitential times (canon 1250). Advent is a season of devout and joyful expectation, and voluntary penance fits it well.",
  },
  {
    q: "When is Advent in 2026?",
    a: "Advent 2026 begins on Sunday, November 29, and ends on the evening of Thursday, December 24, when the Christmas season begins with the Vigil Mass.",
  },
  {
    q: "Is there abstinence on Christmas Day 2026?",
    a: "No. Christmas falls on a Friday in 2026, but it is a solemnity, and solemnities lift Friday abstinence (canon 1251). Feast.",
  },
];

export const Route = createFileRoute("/advent")({
  head: () =>
    guideHead({
      title: "How to Fast in Advent: A Catholic Guide (2026)",
      description:
        "What the Church asks in Advent 2026 (Nov 29 – Dec 24), what is traditional, simple ways to keep it, and a family fasting plan with small sacrifices for children.",
      path: "/advent",
      date: GUIDE_UPDATED,
      faqs: FAQS,
    }),
  component: AdventPage,
});

const WEEKS: Array<{ label: string; dates: string; items: string[] }> = [
  {
    label: "First week",
    dates: "Nov 29 – Dec 5",
    items: [
      "Light the first candle of the wreath at supper and say one short prayer together.",
      "Friday, December 4: no meat for everyone 14 and older. Younger children can share the meatless supper.",
      "Each adult chooses one penance for the season and keeps it quietly.",
      "Each child picks one small sacrifice for the week with a parent's help.",
    ],
  },
  {
    label: "Second week",
    dates: "Dec 6 – 12",
    items: [
      "Tuesday, December 8: the Immaculate Conception, a holy day of obligation. Go to Mass together.",
      "Friday, December 11: meatless supper.",
      "Start an alms jar. Whatever the household gives up, put the money in it for the poor.",
    ],
  },
  {
    label: "Third week",
    dates: "Dec 13 – 19",
    items: [
      "Gaudete Sunday: light the rose candle. The sacrifices are half done.",
      "Ember days, December 16, 18, and 19: adults who are able may keep the traditional fast on one or more of them. Pray for priests.",
      "Friday, December 18: meatless, as every Friday.",
      "Go to confession before Christmas if you can.",
    ],
  },
  {
    label: "Fourth week",
    dates: "Dec 20 – 24",
    items: [
      "Sing or read the O Antiphons at supper (they run December 17 to 23).",
      "Keep the meals plain and save the feast for Christmas.",
      "Christmas Eve: a simple supper, then the Vigil or Midnight Mass if the family can.",
      "Friday, December 25: Christmas. No abstinence. The sacrifices end here.",
    ],
  },
];

function AdventPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-sm font-medium text-accent">A Catholic guide · Advent 2026</p>
      <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-fg sm:text-4xl">
        How to fast in Advent
      </h1>
      <p className="mt-4 border-l-2 border-gold pl-4 text-sm leading-relaxed text-muted italic">
        Prepare the way of the Lord, make his paths straight. — Mark 1:3
      </p>
      <p className="mt-6 text-base leading-relaxed text-fg/90">
        Advent 2026 runs from <strong>Sunday, November 29</strong>, to the evening of{" "}
        <strong>Thursday, December 24</strong>. The Church in the United States sets no fast for these four
        weeks. Many households keep one anyway, and the old custom is worth knowing. Below is what is required,
        what is traditional, and a plain plan a family can keep.
      </p>

      <GuideSection title="What the Church asks in Advent">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>No required fast.</strong> There is no obligatory fast day in Advent for Latin Catholics in the
            U.S. The only two fast days of the year are Ash Wednesday and Good Friday.
          </li>
          <li>
            <strong>Fridays still count.</strong> Every Friday is a day of penance. Catholics 14 and older abstain
            from meat. In the U.S., outside Lent, the bishops allow another act of penance to take the place of
            abstinence, but some penance is still asked. The Fridays of Advent 2026 are December 4, 11, and 18.
          </li>
          <li>
            <strong>One holy day.</strong> The Immaculate Conception, Tuesday, December 8, is a holy day of
            obligation in the U.S.
          </li>
          <li>
            <strong>Christmas lifts the Friday.</strong> Christmas Day falls on a Friday this year. It is a
            solemnity, so there is no abstinence.
          </li>
          <li>
            <strong>The Eucharistic fast</strong> is the same as always: one hour before Communion.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="What is traditional, and optional">
        <p>
          In parts of the early Church, especially in Gaul, Advent was kept as a lesser Lent. It began after the
          feast of St. Martin on November 11 and was sometimes called St. Martin&rsquo;s Lent, with fasting on
          several days of each week. Over the centuries the discipline was relaxed. Until the reforms of 1966,
          Latin Catholics still kept Christmas Eve as a day of fast and abstinence.
        </p>
        <p>
          The Advent{" "}
          <Link to="/ember-days" className={linkClass}>
            Ember days
          </Link>{" "}
          remain on the traditional calendar: in 2026, Wednesday, December 16, Friday, December 18, and Saturday,
          December 19. They are no longer required in the U.S., but they are a good place to put a voluntary fast.
          Eastern Catholics keep the Nativity Fast from November 15 according to their own Church&rsquo;s discipline.
        </p>
        <p>None of this binds. All of it is open to anyone who wants to prepare more seriously for Christmas.</p>
      </GuideSection>

      <GuideSection title="Simple ways to keep Advent">
        <p>Pick one or two. A small penance kept to December 24 is worth more than a large one dropped by the 6th.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Keep every Friday meatless, even though a substitute is allowed.</li>
          <li>
            Choose one weekday and eat the way the Church asks on a fast day: one full meal and two smaller ones
            that together do not equal it. Adults in ordinary health only.
          </li>
          <li>Give the money saved to the poor, the parish, or a family in need.</li>
          <li>Set down one ordinary comfort (sweets, a show, the radio in the car) until Christmas.</li>
          <li>Pray at the Advent wreath at supper, and add the O Antiphons from December 17.</li>
          <li>Make a good confession before Christmas.</li>
        </ul>
      </GuideSection>

      <GuideSection title="A simple family fasting plan for Advent">
        <p>
          Children do not fast, and they are not bound to abstinence until 14. The Church still asks parents to
          form them in the sense of penance (canon 1252), so the plan gives them small sacrifices, chosen with a
          parent and ended gladly at Christmas. Never take a meal away from a child.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-border bg-surface">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="p-3 font-semibold">Age</th>
                <th className="p-3 font-semibold">What applies</th>
                <th className="p-3 font-semibold">A fitting Advent part</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-fg/90">
              <tr>
                <td className="p-3 align-top font-medium">Under 7</td>
                <td className="p-3 align-top">Nothing required</td>
                <td className="p-3 align-top">Light a candle, say the prayer, give one toy or treat to another child</td>
              </tr>
              <tr>
                <td className="p-3 align-top font-medium">7 – 13</td>
                <td className="p-3 align-top">No fast, no required abstinence</td>
                <td className="p-3 align-top">One small sacrifice a week: dessert on one day, a favorite show, a chore done without being asked</td>
              </tr>
              <tr>
                <td className="p-3 align-top font-medium">14 – 17</td>
                <td className="p-3 align-top">Friday abstinence</td>
                <td className="p-3 align-top">Friday meatless, plus one personal penance for the season</td>
              </tr>
              <tr>
                <td className="p-3 align-top font-medium">18 – 59</td>
                <td className="p-3 align-top">Friday abstinence; Advent fasting is voluntary</td>
                <td className="p-3 align-top">One fast day a week or the Ember days, if health allows</td>
              </tr>
              <tr>
                <td className="p-3 align-top font-medium">60+, sick, pregnant, nursing</td>
                <td className="p-3 align-top">Not bound to fast</td>
                <td className="p-3 align-top">Prayer and almsgiving; follow your doctor</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="space-y-4">
          {WEEKS.map((w) => (
            <div key={w.label} className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-gold">{w.dates}</p>
              <h3 className="mt-1 font-semibold text-fg">{w.label}</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
                {w.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted">
          If fasting has become a way to punish the body, or food is already a struggle, leave the fast aside and
          talk to a priest and a doctor. This is a rule of prayer, not medical advice.
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
            <Link to="/ember-days" className={linkClass}>
              Ember Days 2026–2027: dates and rules
            </Link>
          </li>
          <li>
            <Link to="/fasting" className={linkClass}>
              The fasting calendar, day by day
            </Link>
          </li>
          <li>
            <Link to="/essays/$slug" params={{ slug: "fasting-is-not-keto" }} className={linkClass}>
              Fasting is not keto
            </Link>
          </li>
        </ul>
        <p className="mt-6">
          If the Christmas budget is what crowds out prayer this month, the sister site{" "}
          <a href={SISTER.href} className={linkClass} target="_blank" rel="noopener noreferrer">
            {SISTER.name}
          </a>{" "}
          has calculators and writing for that side of the house.
        </p>
      </div>
    </main>
  );
}
