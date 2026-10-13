import { createFileRoute } from "@tanstack/react-router";
import { feedXml } from "@/lib/seo";

export const Route = createFileRoute("/feed.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(feedXml(), {
          headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
          },
        }),
    },
  },
});
