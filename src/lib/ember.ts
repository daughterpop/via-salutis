export type EmberLane = {
  lane: "fast" | "food" | "prayer";
  title: string;
};

export type EmberEdition = {
  slug: string;
  issue: number;
  title: string;
  lede: string;
  dateLabel: string;
  sundayLabel: string;
  lanes: EmberLane[];
  body: string[];
};

export const EMBER_EDITIONS: EmberEdition[] = [
  {
    slug: "keep-friday-ordinary",
    issue: 1,
    title: "Keep Friday ordinary",
    lede: "The body is not a project. Friday abstinence is how a household remembers that, week after week, without a program.",
    dateLabel: "September 7, 2026",
    sundayLabel: "23rd Sunday in Ordinary Time",
    lanes: [
      { lane: "fast", title: "Mark Friday before the week fills. Meatless is the floor, not a brand." },
      { lane: "food", title: "The long-weekend spread is not a feast if Sunday was already enough." },
      { lane: "prayer", title: "Whoever would save his life will lose it — including the optimized one." },
    ],
    body: [
      "Ordinary Time is where most of the Christian life actually happens. That is also where fasting dies: not in Lent, when everyone is talking about it, but on a random Friday in September when the parish fish fry is closed and the leftover pizza is already in the car.",
      "Via Salutis is not a protocol. It is a reminder that the body you are dragging through the week is already a temple, and temples have rules of reverence. Friday is the oldest of them. Keep it small enough to repeat.",
      "If the house needs a number, use this one: one meatless Friday, one hour of sleep protected, one meal begun with the sign of the cross. That is usually enough to see the next step.",
    ],
  },
];

export function latestEdition() {
  return EMBER_EDITIONS[0]!;
}

export function formatIssue(edition: EmberEdition) {
  return `Issue ${String(edition.issue).padStart(2, "0")}`;
}

export function laneLabel(lane: EmberLane["lane"]) {
  if (lane === "fast") return "Fast";
  if (lane === "food") return "Food";
  return "Prayer";
}
