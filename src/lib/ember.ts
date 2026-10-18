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
    slug: "what-belongs-to-god",
    issue: 6,
    title: "What belongs to God",
    lede: "Jesus asks whose image is on the coin. This week the household pays the week what it honestly owes and gives God what bears his image: Friday abstinence, one shared supper, and a prayer for the missions.",
    dateLabel: "October 18, 2026",
    sundayLabel: "29th Sunday in Ordinary Time",
    lanes: [
      { lane: "fast", title: "Friday, October 23: abstinence from meat, owed and already known. Nothing added." },
      { lane: "food", title: "Sit the whole house down to one shared supper this week, and give thanks for what was given." },
      { lane: "prayer", title: "Then repay to Caesar what belongs to Caesar and to God what belongs to God." },
    ],
    body: [
      "The Pharisees bring a coin to trap him, and Jesus asks them to look at it. Whose image is this? Caesar’s, so it goes back to Caesar. The question underneath is one a household can ask at its own table: whose image is on us? The week has rightful claims — the job, the bills, the children’s schedules — and they deserve to be paid honestly. But the body was stamped with another image first, and it belongs to the One who made it. Friday, October 23, is a small coin returned to him. Latin-rite Catholics fourteen and older abstain from meat; in the U.S. a bishop-approved penance may take its place outside Lent. Those who are ill, pregnant, or nursing, and anyone for whom eating is already hard, are not asked to add anything. No one needs a stricter fast to prove the debt is serious.",
      "Isaiah calls Cyrus the Lord’s anointed — a Persian king who did not know him, used anyway to bring the exiles home. That is consolation for a tired house. God does not wait for the family to become impressive before he works through it. Psalm 96 tells the nations to give the Lord glory and honor, and most weeks that glory is paid in small change: the dishes done, a child’s fever watched through the night, grace said over a plain supper.",
      "Paul thanks God for the Thessalonians’ work of faith, labor of love, and endurance in hope. On World Mission Sunday the Church prays for those who carry the Gospel far from home, and a household can join them from where it stands. Say one Our Father for the missions before the week begins, and let Friday be the rest of the offering. Give Caesar his coin. Give God the one who bears his image.",
      "From the cellar: The Catholic Company takes ten dollars off a first order of seventy dollars or more — Bibles and prayer books worth opening, never a substitute for the prayer itself.",
    ],
  },
  {
    slug: "everything-is-ready",
    issue: 5,
    title: "Everything is ready",
    lede: "The king has already prepared the banquet. This week the household answers with ordinary Friday abstinence, a real table, and the small yes that does not wait for a quieter schedule.",
    dateLabel: "October 11, 2026",
    sundayLabel: "28th Sunday in Ordinary Time",
    lanes: [
      { lane: "fast", title: "Keep Friday, October 16. The invitation is already issued; meatless is the response." },
      { lane: "food", title: "Put ordinary food on the table. The feast is ready; the house does not invent a new menu." },
      { lane: "prayer", title: "Behold, I have prepared my banquet, and everything is ready; come to the feast." },
    ],
    body: [
      "Friday, October 16, is ordinary abstinence: from fourteen on, no meat. That is the wedding garment the house can actually put on this week — small, repeatable, already known. Do not add a harder fast to prove seriousness. Pregnant and nursing mothers, the sick, and anyone for whom food is already a war are not called to more.",
      "Isaiah sees a mountain where the Lord of hosts provides rich food and choice wines for all peoples, and destroys the veil that covers the nations. Matthew puts the same abundance in a king’s house: the calves and fattened cattle are killed, everything is ready, come. The ones who refuse go to the farm or the business. A household knows that refusal. The week fills with screens, the drive-thru bag lands on the counter at six, sleep is traded for one more thing that feels urgent, and Mass becomes the errand that can wait.",
      "Philippians is the other half of the lesson: the secret of being well fed and of going hungry, of living in abundance and of being in need. The body does not have to be optimized before it can answer the call. Contentment is learned in the ordinary circumstance, not after the schedule clears.",
      "Psalm 23 leads the household beside restful waters and refreshes the soul. Protect one hour of sleep so the house can still reach Mass and Compline. Begin the meal with the sign of the cross. Keep Friday. Come. Many are invited; the few who are chosen are the ones who show up in what they already have.",
      "From the cellar: Oura rings are ten percent off in the shop — a tool for thin nights, not the garment."

    ],
  },
  {
    slug: "fruit-at-the-proper-time",
    issue: 4,
    title: "Fruit at the proper time",
    lede: "Vintage time is what the Gospel calls this week. The landowner does not ask for a new vineyard. He asks for the produce already owed: Friday kept, the table fed, and the anxiety handed over in prayer.",
    dateLabel: "October 4, 2026",
    sundayLabel: "27th Sunday in Ordinary Time",
    lanes: [
      { lane: "fast", title: "Keep Friday, October 9. Abstinence is the produce, not a harder fast invented for October." },
      { lane: "food", title: "Feed the house ordinary food. A thin pantry is not a virtue; restock it." },
      { lane: "prayer", title: "Have no anxiety at all, but in everything, by prayer and petition, with thanksgiving, make your requests known to God." },
    ],
    body: [
      "Friday, October 9: from fourteen on, no meat. That is the fruit at the proper time — not a seasonal challenge, not a way to make up for September, and not a second fast to prove seriousness. The memorial of Francis yields to this Sunday, so the house does not invent a feast exception and then let the real Friday slide. Pregnant and nursing mothers, the sick, and anyone for whom food is already a war are not called to more.",
      "Isaiah’s friend had already done the work. He spaded the hillside, cleared the stones, planted the choicest vines, built a watchtower, and hewed a press. Then he looked for grapes and found wild ones. Matthew tells the same story from the gate: the landowner leased a finished vineyard, and when vintage came the tenants kept the produce and refused the son. A household can look like that in the first week of October. The rule is known. Friday is on the calendar. Sleep was named last month. And the week still comes in wild — late screens, the grocery list still unwritten Thursday night, a body anxious enough that Mass feels like one more errand.",
      "Philippians is the prayer for a tired parent, and it is precise. Have no anxiety at all, but in everything, by prayer and petition, with thanksgiving, make your requests known to God. Then the peace of God that surpasses all understanding will guard your hearts and minds in Christ Jesus. The guarding is not a mood you manufacture after the children are down. It follows the handing over. Name the thing crowding sleep — the bill, the cough, the morning that starts too early — and give it before the meal, with thanks for the food actually on the table.",
      "The face of the Lord is what restores the vine. Tonight, put one question to the house: what did keeping Friday cost — and was it worth it?",
      "From the cellar: Thrive Market is forty percent off a first order in the shop — a restock for thin pantries, not a rule of life."

    ],
  },
  {
    slug: "change-your-mind",
    issue: 3,
    title: "Change your mind",
    lede: "A man had two sons. One said no and later went; the other said yes and stayed home. This week the body gets the same chance: keep Friday, feed the house, and do the small work that was already asked.",
    dateLabel: "September 27, 2026",
    sundayLabel: "26th Sunday in Ordinary Time",
    lanes: [
      { lane: "fast", title: "Keep the Friday you already know. Meatless is the father’s will for the day, not a new resolution." },
      { lane: "food", title: "Put ordinary food on the table. The body that said yes to a protocol still needs supper." },
      { lane: "prayer", title: "Which of the two did his father’s will? The one who changed his mind and went." },
    ],
    body: [
      "Most households do not fail at the large ascesis. They fail at the second son’s first answer. The calendar fills with good intentions about sleep, screens, and meat, and the actual Friday arrives with nothing thawed, nothing planned, and the menu a question mark. The Gospel this Sunday does not praise the polished yes that never leaves the mouth. It praises the one who said no, then turned, and went into the vineyard. Ezekiel is blunt: the one who turns from the wickedness he has committed shall preserve his life. Philippians asks for the same mind that was in Christ, who emptied himself and became obedient. None of that requires a new stack or a recovery week. It requires the small obedience already on the books: no meat on Friday, a real meal, one hour of sleep protected so the house can still reach Mass and Compline.",
      "Change your mind about the body this week the way the first son did. Stop treating the rule as optional once the week is hard. Mark the Friday. Feed the children without apology. The Lord does not wait for the optimized schedule. He waits for the one who finally goes. Go, then — the vineyard is the Friday in front of you."

    ],
  },
  {
    slug: "seek-while-near",
    issue: 2,
    title: "Seek while he is near",
    lede: "The Ember days are behind the house. This week returns to ordinary time in the body: one Friday, ordinary food, and the nearness of the Lord who does not wait for a perfect schedule.",
    dateLabel: "September 20, 2026",
    sundayLabel: "25th Sunday in Ordinary Time",
    lanes: [
      { lane: "fast", title: "Keep Friday after Ember. Meatless is still the floor, not a recovery program." },
      { lane: "food", title: "Restock the ordinary table. The body that fasted needs real food, not a new rule." },
      { lane: "prayer", title: "Seek the LORD while he may be found; call him while he is near." },
    ],
    body: [
      "Ember week asks more of the household and then ends. What follows is not a cleanse or a rebound protocol. It is the same Friday abstinence, the same table, and the same need for sleep that the children and the Mass already require. The body is not a project that resets every season; it is the temple that must still carry the week.",
      "Isaiah does not say seek the Lord when the schedule is clear or the fasting score is high. He says seek him while he may be found, call him while he is near. The vineyard owner pays the last workers the same wage. The house that kept Ember and the house that could only keep Friday both stand under the same generosity. Grumbling about who did more is not the work of the week.",
      "Protect one hour of sleep. Put real food back on the table without apology. Begin the meal with the sign of the cross. That is usually enough. The Lord is near to all who call upon him in truth; the body does not have to be optimized before it can answer.",
    ],
  },
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
      "Ordinary Time is where most of the Christian life actually happens. That is also where fasting dies: not in Lent, when everyone is talking about it, but on a random Friday in September when the parish fish fry is closed and the takeout containers are already stacked by the door.",
      "Via Salutis is not a protocol. It is a reminder that the body you are dragging through the week is already a temple, and temples have rules of reverence. Friday is the oldest of them. Keep it small enough to repeat.",
      "If the house needs a number, use this one: one meatless Friday, one hour of sleep protected, one meal begun with the sign of the cross. That is usually enough to see the next step.",
    ],
  },
];

export function latestEdition() {
  return EMBER_EDITIONS[0]!;
}

export function editionBySlug(slug: string) {
  return EMBER_EDITIONS.find((e) => e.slug === slug);
}

export function formatIssue(edition: EmberEdition) {
  return `Issue ${String(edition.issue).padStart(2, "0")}`;
}

export function laneLabel(lane: EmberLane["lane"]) {
  if (lane === "fast") return "Fast";
  if (lane === "food") return "Food";
  return "Prayer";
}
