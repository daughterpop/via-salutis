export type FastKind = "friday" | "ember" | "ash" | "good-friday" | "vigil" | "none";

export type DayRule = {
  date: Date;
  kind: FastKind;
  title: string;
  detail: string;
};

function atNoon(year: number, monthIndex: number, day: number) {
  return new Date(year, monthIndex, day, 12, 0, 0, 0);
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

/** Autumn Ember days: Wednesday, Friday, Saturday after Holy Cross (Sept 14). */
export function autumnEmberDays(year: number) {
  const holyCross = atNoon(year, 8, 14);
  const wed = new Date(holyCross);
  const daysUntilWed = (3 - holyCross.getDay() + 7) % 7;
  wed.setDate(holyCross.getDate() + (daysUntilWed === 0 ? 7 : daysUntilWed));
  const fri = new Date(wed);
  fri.setDate(wed.getDate() + 2);
  const sat = new Date(wed);
  sat.setDate(wed.getDate() + 3);
  return [wed, fri, sat];
}

export function ruleForDate(date: Date): DayRule {
  const year = date.getFullYear();
  const ember = autumnEmberDays(year);
  const isEmber = ember.some((d) => isSameDay(d, date));
  const isFriday = date.getDay() === 5;
  const isAsh = date.getMonth() === 1 && date.getDate() === 18 && year === 2026; // 2026 Ash Wednesday: Feb 18
  const isGoodFriday = date.getMonth() === 3 && date.getDate() === 3 && year === 2026;

  if (isAsh) {
    return {
      date,
      kind: "ash",
      title: "Ash Wednesday — fast and abstinence",
      detail:
        "One full meal, two smaller ones that do not add up to a second full meal. No meat. This is a day of repentance, not a cleanse.",
    };
  }
  if (isGoodFriday) {
    return {
      date,
      kind: "good-friday",
      title: "Good Friday — fast and abstinence",
      detail: "The strictest day of the year. Hunger here is meant to look at the Cross, not at a scale.",
    };
  }
  if (isEmber) {
    const names = ["Wednesday", "Friday", "Saturday"];
    const idx = ember.findIndex((d) => isSameDay(d, date));
    return {
      date,
      kind: "ember",
      title: `Ember ${names[idx]} — traditional fast`,
      detail:
        "The Ember days of September thank God for the harvest and ask for priests. Traditional practice: fast (one full meal) and abstinence. If that is too much for this season of life, keep Friday and pray for vocations.",
    };
  }
  if (isFriday) {
    return {
      date,
      kind: "friday",
      title: "Friday abstinence",
      detail:
        "Latin-rite Catholics fourteen and older abstain from meat. In the U.S. a bishop-approved penance may replace it outside Lent — but meatless Friday is the oldest, smallest, most repeatable rule a house can keep.",
    };
  }
  return {
    date,
    kind: "none",
    title: "No required fast",
    detail:
      "Eat with gratitude. A household still needs a regular meal, a regular bedtime, and a prayer before both. Feast when the Church feasts.",
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
