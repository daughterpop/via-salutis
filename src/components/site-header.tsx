import { Link, useRouterState } from "@tanstack/react-router";
import { ExternalLink, Gift } from "lucide-react";
import { NAV } from "@/lib/site";
import { getReferral } from "@/lib/referrals";
import { cn } from "@/lib/utils";

function navActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function SiteHeader({ showReferralStrip = true }: { showReferralStrip?: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const referral = getReferral({ slot: 0, pool: "banner" });
  const stripAllowed =
    showReferralStrip &&
    (pathname === "/" || pathname === "/shop" || pathname === "/fasting");

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-6 sm:py-4">
          <Link
            to="/"
            className="inline-flex min-w-0 shrink-0 items-center gap-1.5 leading-tight sm:gap-2"
          >
            <img src="/logo.svg" alt="" width={28} height={28} className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
            <span className="truncate font-display text-sm font-semibold tracking-tight text-accent sm:text-xl lg:text-2xl">
              Via Salutis
            </span>
          </Link>
          <div className="flex shrink-0 items-center gap-2 text-xs sm:gap-5 sm:text-sm lg:gap-8">
            {NAV.map(({ to, label }) => {
              const active = navActive(pathname, to);
              return (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    "whitespace-nowrap font-medium",
                    active ? "text-accent" : "text-fg/80 hover:text-accent",
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {stripAllowed && referral && (
        <div className="bg-strip text-strip-fg">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-2 px-4 py-2.5 text-center sm:flex-row sm:gap-4 sm:px-6 sm:py-3 sm:text-left">
            <div className="flex items-center gap-2 text-sm sm:text-[15px]">
              <Gift size={16} className="shrink-0 text-gold" />
              <span>
                <strong className="font-semibold">{referral.stripHeadline}</strong>
                <span className="text-strip-fg/80">{referral.stripSub}</span>
              </span>
            </div>
            <a
              href={referral.href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-surface px-4 py-1.5 text-sm font-semibold text-accent hover:bg-accent-soft"
            >
              {referral.stripCta}
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
