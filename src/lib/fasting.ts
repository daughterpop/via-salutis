export type FastKind = "friday" | "ember" | "ash" | "good-friday" | "vigil" | "none";

export type DayRule = {
  date: Date;
  kind: FastKind;
  title: string;
  detail: string;
  inLent: boolean;
};

function atNoon(year: number, monthIndex: number, day: number) {
  return new Date(year, monthIndex, day, 12, 0, 0, 0);
}

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(date.getDate() + days);
  return next;
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

/** Civil calendar day in Chicago — the household this site is written for. */
export function civilNow(timeZone = "America/Chicago") {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const parts = Object.fromEntries(fmt.formatToParts(new Date()).map((p) => [p.type, p.value]));
  return atNoon(Number(parts.year), Number(parts.month) - 1, Number(parts.day));
}

/** Gregorian computus — Western Easter. */
export function easterSunday(year: number) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return atNoon(year, month - 1, day);
}

function wednesdayAfter(anchor: Date, skipIfWednesday: boolean) {
  const wed = new Date(anchor);
  const daysUntilWed = (3 - anchor.getDay() + 7) % 7;
  wed.setDate(anchor.getDate() + (daysUntilWed === 0 ? (skipIfWednesday ? 7 : 0) : daysUntilWed));
  return wed;
}

function emberTriplet(wednesday: Date) {
  return [wednesday, addDays(wednesday, 2), addDays(wednesday, 3)] as const;
}

export type EmberSeason = "lent" | "pentecost" | "september" | "advent";

export function emberDaysForYear(year: number): Record<EmberSeason, readonly Date[]> {
  const easter = easterSunday(year);
  const ash = addDays(easter, -46);
  const firstSundayOfLent = addDays(ash, 4);
  const pentecost = addDays(easter, 49);
  return {
    lent: emberTriplet(wednesdayAfter(firstSundayOfLent, false)),
    pentecost: emberTriplet(wednesdayAfter(pentecost, false)),
    september: emberTriplet(wednesdayAfter(atNoon(year, 8, 14), true)),
    advent: emberTriplet(wednesdayAfter(atNoon(year, 11, 13), true)),
  };
}

/** Autumn Ember days: Wednesday, Friday, Saturday after Holy Cross (Sept 14). */
export function autumnEmberDays(year: number) {
  return [...emberDaysForYear(year).september];
}

export function allEmberDays(year: number) {
  const seasons = emberDaysForYear(year);
  return [
    { season: "Lent" as const, days: seasons.lent },
    { season: "Pentecost" as const, days: seasons.pentecost },
    { season: "September" as const, days: seasons.september },
    { season: "Advent" as const, days: seasons.advent },
  ];
}

function lentWindow(year: number) {
  const easter = easterSunday(year);
  return { ash: addDays(easter, -46), holySaturday: addDays(easter, -1), goodFriday: addDays(easter, -2), easter };
}

type NamedDay = { title: string; solemnity: boolean; note: string };

/** Fixed feasts plus a few moveable solemnities that can outrank Friday abstinence. */
function liturgicalName(date: Date): NamedDay | null {
  const easter = easterSunday(date.getFullYear());
  if (isSameDay(date, easter)) {
    return { title: "Easter Sunday", solemnity: true, note: "The feast of feasts. Eat. Alleluia. Keep Friday when it returns." };
  }
  if (isSameDay(date, addDays(easter, 39))) {
    return { title: "Ascension", solemnity: true, note: "He ascended. Feast. In many U.S. dioceses this is transferred to Sunday." };
  }
  if (isSameDay(date, addDays(easter, 49))) {
    return { title: "Pentecost", solemnity: true, note: "The Spirit is given. Feast. Pentecost Ember days follow this week." };
  }
  if (isSameDay(date, addDays(easter, 56))) {
    return { title: "Trinity Sunday", solemnity: true, note: "Feast. Corpus Christi and the Sacred Heart follow this week." };
  }
  if (isSameDay(date, addDays(easter, 61))) {
    return {
      title: "Sacred Heart",
      solemnity: true,
      note: "A solemnity. If this is Friday, abstinence is dispensed — feast, do not invent a fast.",
    };
  }

  const m = date.getMonth();
  const d = date.getDate();
  const fixed: Array<readonly [number, number, NamedDay]> = [
    [0, 1, { title: "Mary, Mother of God", solemnity: true, note: "A solemnity. Feast. Friday abstinence is dispensed if this falls on Friday." }],
    [2, 19, { title: "St Joseph", solemnity: true, note: "Guardian of the house. A solemnity — feast, even in Lent." }],
    [2, 25, { title: "The Annunciation", solemnity: true, note: "The Word is conceived. A solemnity — feast, even in Lent." }],
    [5, 24, { title: "Nativity of St John the Baptist", solemnity: true, note: "A solemnity. Feast." }],
    [5, 29, { title: "Ss Peter and Paul", solemnity: true, note: "A solemnity. Feast." }],
    [7, 15, { title: "The Assumption", solemnity: true, note: "A holy day. Feast. Friday abstinence is dispensed if this falls on Friday." }],
    [
      8,
      14,
      {
        title: "Exaltation of the Holy Cross",
        solemnity: false,
        note: "The feast that opens September Ember week. No required fast today. Ember Wednesday, Friday, and Saturday follow — traditional, not required in the U.S.",
      },
    ],
    [10, 1, { title: "All Saints", solemnity: true, note: "A holy day. Feast. Friday abstinence is dispensed if this falls on Friday." }],
    [11, 8, { title: "Immaculate Conception", solemnity: true, note: "A holy day. Feast. Friday abstinence is dispensed if this falls on Friday." }],
    [
      11,
      13,
      {
        title: "St Lucy",
        solemnity: false,
        note: "The Advent Ember days follow this feast. No required fast today. Keep Friday when it comes.",
      },
    ],
    [
      11,
      25,
      {
        title: "Christmas",
        solemnity: true,
        note: "The Word became flesh. Feast. If this is a Friday, abstinence is dispensed.",
      },
    ],
  ];
  const hit = fixed.find(([month, day]) => month === m && day === d);
  return hit ? hit[2] : null;
}

export function ruleForDate(date: Date): DayRule {
  const year = date.getFullYear();
  const { ash, holySaturday, goodFriday } = lentWindow(year);
  const inLent = date >= ash && date <= holySaturday;
  const seasons = emberDaysForYear(year);
  const emberEntry = (Object.entries(seasons) as Array<[EmberSeason, readonly Date[]]>).find(([, days]) =>
    days.some((d) => isSameDay(d, date)),
  );
  const named = liturgicalName(date);

  if (isSameDay(date, ash)) {
    return {
      date,
      kind: "ash",
      inLent: true,
      title: "Ash Wednesday — fast and abstinence",
      detail:
        "One full meal, two smaller ones that do not add up to a second full meal. No meat. This is a day of repentance, not a cleanse.",
    };
  }
  if (isSameDay(date, goodFriday)) {
    return {
      date,
      kind: "good-friday",
      inLent: true,
      title: "Good Friday — fast and abstinence",
      detail: "The strictest day of the year. Hunger here is meant to look at the Cross, not at a scale.",
    };
  }
  if (emberEntry) {
    const [season, days] = emberEntry;
    const names = ["Wednesday", "Friday", "Saturday"] as const;
    const idx = days.findIndex((d) => isSameDay(d, date));
    const seasonLabel = season === "september" ? "September" : season === "lent" ? "Lent" : season === "advent" ? "Advent" : "Pentecost";
    return {
      date,
      kind: "ember",
      inLent,
      title: `Ember ${names[idx]} of ${seasonLabel} — traditional fast`,
      detail:
        "Ember days thank God for the season and ask for priests. Traditional practice: fast (one full meal) and abstinence. If that is too much for this season of life, keep Friday and pray for vocations. Not currently required in the U.S.",
    };
  }
  if (named?.solemnity && date.getDay() === 5) {
    return {
      date,
      kind: "none",
      inLent,
      title: `${named.title} — Friday abstinence dispensed`,
      detail: named.note,
    };
  }
  if (date.getDay() === 5) {
    return {
      date,
      kind: "friday",
      inLent,
      title: inLent ? "Friday abstinence (Lent)" : "Friday abstinence",
      detail: inLent
        ? "Latin-rite Catholics fourteen and older abstain from meat. In Lent this is not optional in the U.S. Keep it small enough to repeat: fish, beans, eggs, leftover soup."
        : "Latin-rite Catholics fourteen and older abstain from meat. In the U.S. a bishop-approved penance may replace it outside Lent — but meatless Friday is the oldest, smallest, most repeatable rule a house can keep.",
    };
  }
  if (named) {
    return {
      date,
      kind: "none",
      inLent,
      title: named.title,
      detail: named.note,
    };
  }
  return {
    date,
    kind: "none",
    inLent,
    title: inLent ? "Lent — no required fast today" : "No required fast",
    detail: inLent
      ? "Ordinary Lenten weekdays are not required fasting days in the U.S. Keep Friday. Pray. Eat simply if the house can. Feast is coming."
      : "Eat with gratitude. A household still needs a regular meal, a regular bedtime, and a prayer before both. Feast when the Church feasts.",
  };
}

export function monthGrid(year: number, monthIndex: number) {
  const first = atNoon(year, monthIndex, 1);
  const startWeekday = first.getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const cells: Array<DayRule | null> = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(ruleForDate(atNoon(year, monthIndex, d)));
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
