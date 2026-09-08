import { createFileRoute, Link } from "@tanstack/react-router";
import { ESSAYS } from "@/lib/essays";

export const Route = createFileRoute("/essays/")({ component: EssaysIndex });

function EssaysIndex() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-sm font-medium text-accent">Understand</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-fg sm:text-4xl">Essays</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Temperance, the Eucharist as medicine, and why the body is a dwelling — not a brand.
      </p>
      <div className="mt-8 space-y-4">
        {ESSAYS.map((post) => (
          <Link
            key={post.slug}
            to="/essays/$slug"
            params={{ slug: post.slug }}
            className="block rounded-2xl border border-border bg-surface p-5 hover:border-accent-soft hover:shadow-md sm:p-6"
          >
            <div className="mb-2 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-lg font-semibold text-fg">{post.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
            <p className="mt-3 text-xs text-muted">{post.date}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
