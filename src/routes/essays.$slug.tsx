import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { essayBySlug, ESSAYS } from "@/lib/essays";
import { SISTER } from "@/lib/site";

export const Route = createFileRoute("/essays/$slug")({
  loader: ({ params }) => {
    const essay = essayBySlug(params.slug);
    if (!essay) throw notFound();
    return essay;
  },
  component: EssayPage,
});

function EssayPage() {
  const essay = Route.useLoaderData();
  const others = ESSAYS.filter((e) => e.slug !== essay.slug).slice(0, 2);

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12">
      <Link to="/essays" className="text-sm font-medium text-accent hover:underline">
        ← Essays
      </Link>
      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted">{essay.date}</p>
      <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-fg sm:text-4xl">{essay.title}</h1>
      {essay.verse && (
        <p className="mt-4 border-l-2 border-gold pl-4 text-sm leading-relaxed text-muted italic">{essay.verse}</p>
      )}
      <div className="mt-8 space-y-5 text-base leading-relaxed text-fg/90">
        {essay.body.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
      <p className="mt-10 text-sm leading-relaxed text-muted">
        For the money side of the same vocation, see{" "}
        <a href={SISTER.href} className="font-medium text-accent hover:underline" target="_blank" rel="noopener noreferrer">
          {SISTER.name}
        </a>
        .
      </p>
      {others.length > 0 && (
        <div className="mt-10 border-t border-border pt-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Further reading</p>
          <ul className="mt-3 space-y-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  to="/essays/$slug"
                  params={{ slug: o.slug }}
                  className="font-medium text-accent hover:underline"
                >
                  {o.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
