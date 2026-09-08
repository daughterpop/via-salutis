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

export function essayBySlug(slug: string) {
  return ESSAYS.find((e) => e.slug === slug);
}
