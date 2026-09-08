export type Referral = {
  id: string;
  categories: Array<"fasting" | "food" | "training" | "sleep" | "faith" | "household">;
  inBanner: boolean;
  stripHeadline: string;
  stripSub: string;
  stripCta: string;
  cardEyebrow: string;
  cardBody: string;
  cardCta: string;
  href: string;
};

export const REFERRALS: Referral[] = [
  {
    id: "catholic-company",
    categories: ["faith", "household"],
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
    categories: ["sleep", "training"],
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
];

function dayOfYear(d = new Date()) {
  const start = new Date(d.getFullYear(), 0, 0);
  return Math.floor((d.getTime() - start.getTime()) / 86400000);
}

export function getReferral({
  slot = 0,
  pool = "all",
}: {
  slot?: number;
  pool?: "all" | "banner" | Referral["categories"][number];
} = {}) {
  let list = REFERRALS;
  if (pool === "banner") list = REFERRALS.filter((r) => r.inBanner);
  else if (pool !== "all") list = REFERRALS.filter((r) => r.categories.includes(pool));
  if (list.length === 0) list = REFERRALS.filter((r) => r.inBanner);
  if (list.length === 0) list = REFERRALS;
  return list[(dayOfYear() + slot) % list.length]!;
}
