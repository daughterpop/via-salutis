export type Essay = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  verse?: string;
  body: string[];
};

export const ESSAYS: Essay[] = [
  {
    slug: "walk-like-a-pilgrim",
    title: "Walk like a pilgrim, not a program",
    excerpt:
      "The step counter wants your obedience. The pilgrim walks to arrive somewhere that matters. Movement is older than metrics.",
    date: "October 16, 2026",
    tags: ["Movement", "Rule"],
    verse: "Enoch walked with God, and he was not, for God took him. \u2014 Gen 5:24",
    body: [
      "Nobody in Scripture ever did burpees. They walked. Abraham walked out of Ur. Israel walked out of Egypt. The disciples walked to Emmaus with a stranger who turned out to be everything. The human body was built for distance at a pilgrim's pace, and it still knows it.",
      "Modern exercise treats the body like a machine that must be punished into compliance: no pain, no gain, and the app keeps score. The machine model makes movement a debt you pay or a drug you chase. Miss a day and you are behind. Beat a record and you are still hungry for the next one.",
      "The pilgrim model is older and kinder. A pilgrim walks to get somewhere \u2014 to Mass, to the store, to a friend's door, around the block after dinner with the children. The walking has a destination outside itself, which means it cannot fail the way a program fails. A slow mile to somewhere is still a mile to somewhere.",
      "This is not an argument against training. It is an argument against letting the training own you. Run if you love it. Lift what is heavy. But let the daily foundation be walking, and let the walking be woven into a life: the rosary on the evening loop, the errand on foot, the Sabbath stroll that is prayer with legs.",
      "Start where the pilgrims started. Thirty minutes, most days, at a pace where you could still talk. Leave the metrics at home once a week and walk like Enoch \u2014 with God, going somewhere, in no hurry to arrive.",
    ],
  },
  {
    slug: "the-table-is-an-altar",
    title: "The table is an altar before it is a macro",
    excerpt:
      "Before food was fuel it was a gift, and before the gift it was a sacrifice of praise. Eat like someone at a table, not someone at a lab bench.",
    date: "October 15, 2026",
    tags: ["Food", "Temperance"],
    verse: "Whether you eat or drink, do all for the glory of God. \u2014 1 Cor 10:31",
    body: [
      "The nutrition label reduced dinner to chemistry: so many grams of this, so many of that, and the eater became a lab technician managing inputs. It is useful information. It is also a thin way to meet a gift.",
      "Catholics have always known the table is a theological place. Grace before meals is not a formality; it is a declaration that the food did not originate with you. The fast days teach the appetite who is master. The feast days teach it what joy is for. Thanksgiving, Christmas, Easter \u2014 the Church eats on purpose, and the purpose is never just the macros.",
      "This reorders everything without requiring a new diet. Eat real food, mostly, and thank God for it out loud. Sit down. Do not eat standing over the sink like a thief. Let Sunday dinner be a feast and Friday a fast, and watch the appetite learn its place in the liturgy of the week.",
      "Gluttony was never really about the quantity. The desert fathers called it the gateway vice because it trains the soul to demand satisfaction on schedule. Temperance at the table is training in the opposite direction: the body learns that it can wait, that enough is a real category, that hunger is not an emergency.",
      "If you need a rule: pray before you eat, eat what is set before you with gratitude, and stop when the feast \u2014 not the package \u2014 is over. The altar comes first. The macros can sit in the back.",
    ],
  },
  {
    slug: "sleep-is-a-form-of-trust",
    title: "Sleep is a form of trust",
    excerpt:
      "You cannot hustle your way into rest. Every night the body asks the soul a question: do you believe the world runs without you?",
    date: "October 14, 2026",
    tags: ["Rest", "Rule"],
    verse: "He gives to his beloved sleep. \u2014 Ps 127:2",
    body: [
      "Sleep is the one bodily discipline that cannot be performed. You can lift, fast, and run by effort. Sleep only arrives when effort stops. Every night is a small rehearsal of the oldest truth: the world does not depend on you.",
      "The psalm is blunt about the alternative. \u201cIt is in vain that you rise up early and go late to rest, eating the bread of anxious toil.\u201d Anxious toil \u2014 the bread of the man who believes the household stands or falls on his worry. God gives sleep to his beloved precisely because the beloved is not the one holding everything up.",
      "The wellness industry sells sleep as another optimization target: the ring, the score, the protocol. Some of it helps. But a Catholic sleeps like a child of the Father, not like a machine being maintained. The examen before bed, the sign of the cross on the pillow, the deliberate setting down of the day's accounts \u2014 these are older than any sleep hygiene checklist, and they work because they are acts of trust.",
      "Practically: keep a real bedtime, as regular as Mass. Dim the house when the sun goes down. Put the phone to bed before you go to bed. If worry comes at 2 a.m., pray it instead of feeding it \u2014 the Jesus Prayer, the rosary, or simply \u201cLord, you are awake, so I don't have to be.\u201d",
      "You will not pray, work, or love well on a starved brain. Sleep is not the reward for finishing. It is the foundation the Father gives, nightly, to the beloved. Receive it.",
    ],
  },
  {
    slug: "temple-not-a-project",
    title: "Your body is a temple, not a project",
    excerpt:
      "Paul does not tell you to optimize the vessel. He tells you it is already occupied. The work is reverence, not renovation for its own sake.",
    date: "September 7, 2026",
    tags: ["Temple", "Rule"],
    verse: "Do you not know that your body is a temple of the Holy Spirit within you? — 1 Cor 6:19",
    body: [
      "The wellness industry will sell you a better temple. New paint, new metrics, a new priesthood of coaches. The pitch is always the same: the body you have is a rough draft.",
      "That is not Paul. “Do you not know that your body is a temple of the Holy Spirit within you, whom you have from God, and that you are not your own?” The temple is already consecrated. You were bought at a price. The task is to glorify God in the body you actually have — not to sand it into an advertisement.",
      "This is why Via Salutis sits next to Via Fidelitatis. Money becomes a tyrant when it is treated as the project of the household. The body becomes a tyrant the same way. Both are gifts. Both can crowd out Mass, children, and generosity if you let them run the house.",
      "Reverence looks ordinary. Sleep. Friday abstinence. A walk. Fewer screens after Compline. A doctor when something is wrong. Supplements as the cellarer, not the abbot. Illness, when it comes, is not a failure to hack the flesh. It is a place the Cross already knows.",
      "If you need a rule: stop adding a program until the old Catholic ones are in place. Fast when the Church fasts. Eat when she feasts. Pray as if the One who dwells in you is actually there.",
    ],
  },
  {
    slug: "fasting-is-not-keto",
    title: "Fasting is not keto",
    excerpt:
      "A diet can mimic a fast the way a spreadsheet can mimic providence. The Church is not trying to get you into ketosis. She is trying to get you free.",
    date: "September 6, 2026",
    tags: ["Fasting", "Temperance"],
    verse: "When you fast, do not look gloomy like the hypocrites. — Mt 6:16",
    body: [
      "Keto can be a medical tool. Intermittent fasting can be a schedule. Neither is what Ash Wednesday is for.",
      "A Catholic fast is directed. It has a face: Christ in the desert, Christ on the Cross, the poor man at the door. You are not burning fat for a photograph. You are making room. Hunger becomes a teacher because it is offered, not because it is efficient.",
      "That difference matters on a Friday in Ordinary Time. Meatless is almost nothing as a diet. As obedience it is huge. A household that can skip the obvious pleasure because the Church asked is a household that can skip a lot of other noise later.",
      "Use electrolytes if you are doing a longer fast and your doctor did not forbid it. Eat enough on feast days. Do not fast if you are pregnant, ill, or if food has already become a battlefield — that is not ascesis, and a priest and a physician should be in the room.",
      "The tell that you have slipped into keto-with-a-crucifix: you talk more about the protocol than about prayer. Put the protocol down. Keep Friday. Go to Mass.",
    ],
  },
  {
    slug: "hildegard-viriditas",
    title: "Viriditas: St. Hildegard and the greenness of God",
    excerpt:
      "Hildegard’s word for the life of God in created things is not a spa. It is a claim that herbs, rest, and song belong to the same economy as the sacraments.",
    date: "September 4, 2026",
    tags: ["Saints", "Body"],
    verse: "The Word of God grew a green power in the world. — Hildegard of Bingen",
    body: [
      "St. Hildegard of Bingen wrote about herbs, fevers, and the greening power of God — viriditas — as if the garden and the cloister were not two religions. They are not.",
      "Modern readers try to make her a wellness founder. She was an abbess. The plants were for the infirmary. The music was for the Office. The body was for God. If you take the tincture and leave the psalter, you have not recovered Hildegard. You have founded a brand.",
      "What is worth stealing: she took the flesh seriously without worshipping it. Sleep, food, bile, melancholy — all of it was material for care. The Church still has an infirmary instinct. Use a doctor. Use a kitchen. Use a garden if you have one. Then go back to the choir.",
      "Via Salutis keeps her on the shelf next to the fasting calendar, not next to the influencer. The greenness of God is grace in matter. That includes magnesium. It also includes the Eucharist, which she would not have confused with a superfood.",
    ],
  },
];

/**
 * Ordered reading sequence shown on the homepage ("Read the sequence").
 * Slugs reference entries in ESSAYS; labels are the short display titles.
 */
export const ESSAY_SEQUENCE = [
  { slug: "temple-not-a-project", label: "Temple, not a project" },
  { slug: "fasting-is-not-keto", label: "Fasting is not keto" },
  { slug: "hildegard-viriditas", label: "Hildegard’s viriditas" },
] as const;

export function essayBySlug(slug: string) {
  return ESSAYS.find((e) => e.slug === slug);
}
