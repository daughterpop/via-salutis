import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({
  children,
  showReferralStrip = true,
}: {
  children: ReactNode;
  showReferralStrip?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-fg">
      <SiteHeader showReferralStrip={showReferralStrip} />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
