import { useEffect } from "react";

// AdSense backfill unit. DO NOT MERGE until real ad unit slot IDs exist:
// 1. Submit this site in AdSense and wait for approval.
// 2. Create an ad unit in AdSense and replace AD_SLOT below with its data-ad-slot ID.
const AD_CLIENT = "ca-pub-3388682648764850";
const AD_SLOT = "PASTE_AD_SLOT_HERE";

export function AdSenseUnit() {
  useEffect(() => {
    try {
      ((window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle ||= []).push({});
    } catch {
      // AdSense not ready (e.g. before approval) — renders nothing.
    }
  }, []);

  return (
    <div className="mx-auto my-6 max-w-3xl px-4">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
