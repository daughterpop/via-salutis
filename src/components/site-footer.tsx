import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { FOOTER_NAV, SITE, SISTER } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link to="/" className="font-display text-sm font-semibold text-accent hover:text-accent-hover">
              {SITE.name}
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Fasting, prayer, and a household rule so the body can be a temple — not a project.
            </p>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Explore</p>
            <nav className="flex flex-wrap gap-x-4 gap-y-2">
              {FOOTER_NAV.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm font-medium text-fg/70 hover:text-accent"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-bg p-5 sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-gold">The house</p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="font-display text-base font-semibold text-fg">{SITE.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                <em>{SITE.gloss}</em>. The body, so it can be a fit dwelling for the Holy Spirit.
              </p>
            </div>
            <a
              href={SISTER.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <p className="inline-flex items-center gap-1.5 font-display text-base font-semibold text-fg group-hover:text-accent">
                {SISTER.name}
                <ExternalLink size={14} className="text-muted" />
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                <em>{SISTER.gloss}</em>. {SISTER.blurb}
              </p>
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}
          </p>
          <p className="max-w-md sm:text-right">
            Some shop links are affiliate referrals. If you use them, the site may earn a commission at no extra cost to you. Not medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
