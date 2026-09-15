export type ReferralCategory = "fasting" | "food" | "sleep" | "faith" | "household" | "supplements" | "training";

export type Referral = {
  id: string;
  categories: ReferralCategory[];
  live: boolean;
  inBanner: boolean;
  stripHeadline: string;
  stripSub: string;
  stripCta: string;
  cardEyebrow: string;
  cardBody: string;
  cardCta: string;
  href: string;
  applyHref?: string;
};

/**
 * Live codes are Dustin’s. Recommended rows are honest product links until a
 * personal referral URL exists — do not invent discounts.
 */
export const REFERRALS: Referral[] = [
  {
    id: "catholic-company",
    categories: ["faith", "household"],
    live: true,
    inBanner: true,
    stripHeadline: "$10 off first $70+ order",
    stripSub: " — fasting books, Bibles, and sacramentals from The Catholic Company",
    stripCta: "Shop Catholic Company",
    cardEyebrow: "Form the house, not just the body",
    cardBody:
      "The Catholic Company carries Bibles, prayer books, rosaries, and the fasting literature worth actually owning. New customers get $10 off a first purchase of $70 or more.",
    cardCta: "Get $10 off $70+",
    href: "https://rwrd.io/ref_O0T1BE2?c",
  },
  {
    id: "thrive-market",
    categories: ["food", "household"],
    live: true,
    inBanner: true,
    stripHeadline: "40% off first order + $40 Thrive Cash",
    stripSub: " — organic groceries at wholesale prices",
    stripCta: "Join Thrive Market",
    cardEyebrow: "Feed the household without the markup",
    cardBody:
      "Thrive Market is a membership grocer for organic food and ordinary household goods at wholesale prices. Friends get 40% off the first order; after they stay an annual member 30+ days you earn $40 Thrive Cash.",
    cardCta: "Get 40% off first order",
    href: "http://thrv.me/PxCk1V",
  },
  {
    id: "oura",
    categories: ["sleep"],
    live: true,
    inBanner: true,
    stripHeadline: "10% off Oura Ring",
    stripSub: " — sleep and recovery, not a scoreboard for vanity",
    stripCta: "Get 10% off",
    cardEyebrow: "Steward sleep",
    cardBody:
      "Oura tracks sleep and recovery in a ring you can forget you are wearing. Use this referral for 10% off a new ring. Data is for the rule of life — not another thing to obsess over.",
    cardCta: "Get 10% off Oura Ring",
    href: "https://ouraring.com/discount/b79278c3ad?utm_source=user&utm_medium=iac_raf&utm_type=alwayson-cvr&utm_campaign=2026RAF&utm_variant=2026_raf_may",
  },
  {
    id: "transition",
    categories: ["training"],
    live: true,
    inBanner: true,
    stripHeadline: "1 month free Transition",
    stripSub: " — swim, bike, and run plans for a full house",
    stripCta: "Try Transition free",
    cardEyebrow: "Train inside a vocation",
    cardBody:
      "Transition is an AI triathlon app with adaptive swim, bike, and run plans. Code TRANSITIONVTRTF4 is one month free — built for age-groupers who also have a job, a spouse, and kids.",
    cardCta: "Get 1 month free",
    href: "https://www.transition.fun?ref=TRANSITIONVTRTF4",
  },
  {
    id: "form-swim",
    categories: ["training"],
    live: true,
    inBanner: false,
    stripHeadline: "FORM smart swim goggles",
    stripSub: " — pace and stroke in the pool, not on a watch you cannot see",
    stripCta: "Shop FORM",
    cardEyebrow: "See the work in the water",
    cardBody:
      "FORM goggles put pace, distance, and stroke rate in your field of view. Useful for the swim you actually do at 5 a.m. before anyone else is up.",
    cardCta: "Get FORM goggles",
    href: "https://www.formswim.com/cart/40479402065991:1?attributes[referrerUserId]=019cf7d0-367d-7dd4-ac63-df4fbd8b42a3&attributes[referralCampaign]=one-month-reward",
  },
  {
    id: "lmnt",
    categories: ["fasting", "supplements"],
    live: false,
    inBanner: false,
    stripHeadline: "LMNT electrolytes",
    stripSub: " — salt for a longer fast, not a keto identity",
    stripCta: "Shop LMNT",
    cardEyebrow: "Keep the fast from becoming a crash",
    cardBody:
      "LMNT is salty water with potassium and magnesium. Useful on a longer fast or a hot Friday if a physician did not forbid it. It is not a protocol, and it is not why you skip meat.",
    cardCta: "See LMNT",
    href: "https://drinklmnt.com/",
    applyHref: "https://drinklmnt.com/pages/wholesale",
  },
  {
    id: "thorne",
    categories: ["supplements"],
    live: false,
    inBanner: false,
    stripHeadline: "Thorne",
    stripSub: " — clinical-grade vitamins, third-party tested",
    stripCta: "See Thorne",
    cardEyebrow: "The cellarer, not the abbot",
    cardBody:
      "Thorne is practitioner-grade and NSF-tested. Vitamin D, magnesium, a prenatal if a doctor asked — the infirmary shelf, not a stack to worship.",
    cardCta: "See Thorne",
    href: "https://www.thorne.com/",
    applyHref: "https://www.thorne.com/ambassadors",
  },
  {
    id: "needed",
    categories: ["supplements", "household"],
    live: false,
    inBanner: false,
    stripHeadline: "Needed",
    stripSub: " — prenatal and postpartum nutrition for a house still having children",
    stripCta: "See Needed",
    cardEyebrow: "For the mothers in the house",
    cardBody:
      "Needed rebuilds the prenatal from depletion data, not from a gummy. Catholic households having children need this more than another greens powder.",
    cardCta: "See Needed",
    href: "https://thisisneeded.com/",
    applyHref: "https://thisisneeded.com/pages/partnerships",
  },
  {
    id: "butcherbox",
    categories: ["food"],
    live: false,
    inBanner: false,
    stripHeadline: "ButcherBox",
    stripSub: " — meat for feast days, not a diet brand",
    stripCta: "See ButcherBox",
    cardEyebrow: "Feast when the Church feasts",
    cardBody:
      "A freezer of meat makes Friday abstinence make sense, and Sunday actually a feast. Grass-fed beef, chicken, and fish on a schedule — not keto, not a cleanse.",
    cardCta: "See ButcherBox",
    href: "https://www.butcherbox.com/",
  },
  {
    id: "hallow",
    categories: ["faith", "sleep"],
    live: false,
    inBanner: false,
    stripHeadline: "Hallow",
    stripSub: " — prayer and a sleep examen, not a wellness app",
    stripCta: "Pray on Hallow",
    cardEyebrow: "Compline before the ring",
    cardBody:
      "Hallow is the Catholic prayer app: Office, rosary, sleep meditations. Put it next to the fast, not next to a biohack. No invented discount — just the tool.",
    cardCta: "Open Hallow",
    href: "https://hallow.com/",
  },
];

function dayOfYear(d = new Date()) {
  const start = new Date(d.getFullYear(), 0, 0);
  return Math.floor((d.getTime() - start.getTime()) / 86400000);
}

export function liveReferrals() {
  return REFERRALS.filter((r) => r.live);
}

export function recommendedReferrals() {
  return REFERRALS.filter((r) => !r.live);
}

export function getReferral({
  slot = 0,
  pool = "all",
}: {
  slot?: number;
  pool?: "all" | "banner" | ReferralCategory;
} = {}) {
  let list = REFERRALS.filter((r) => r.live);
  if (pool === "banner") list = REFERRALS.filter((r) => r.live && r.inBanner);
  else if (pool !== "all") list = REFERRALS.filter((r) => r.live && r.categories.includes(pool));
  if (list.length === 0) list = REFERRALS.filter((r) => r.live && r.inBanner);
  if (list.length === 0) list = liveReferrals();
  if (list.length === 0) list = REFERRALS;
  return list[(dayOfYear() + slot) % list.length]!;
}
