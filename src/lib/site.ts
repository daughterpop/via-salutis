export const SITE = {
  name: "Via Salutis",
  gloss: "the way of health — and of salvation",
  tagline: "Faithful health for Catholic bodies",
  description:
    "Fasting, prayer, and a household rule so the body can be what it already is: a temple of the Holy Spirit.",
  email: "dustin.himmerich@protonmail.com",
} as const;

export const SISTER = {
  name: "Via Fidelitatis",
  href: "https://www.viafidelitatis.com",
  gloss: "the way of fidelity",
  tagline: "Faithful FI tools for Catholic families",
  blurb:
    "Calculators and writing so money stops crowding out Mass, kids, and generosity.",
} as const;

export const NAV = [
  { to: "/fasting", label: "Fasting" },
  { to: "/essays", label: "Essays" },
  { to: "/ember", label: "Ember" },
  { to: "/shop", label: "Shop" },
] as const;

export const FOOTER_NAV = [
  ...NAV,
  { to: "/faq", label: "FAQ" },
  { to: "/about", label: "About" },
] as const;
