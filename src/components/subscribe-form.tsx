import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { formatIssue, latestEdition } from "@/lib/ember";
import { SITE } from "@/lib/site";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const latest = latestEdition();

  const handleSubscribe = async () => {
    if (!email.includes("@")) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: "New Via Salutis subscriber",
          _template: "table",
          _captcha: "false",
        }),
      });
      if (response.ok) setSubmitted(true);
      else {
        const data = (await response.json().catch(() => ({}))) as { message?: string };
        throw new Error(data.message || "Subscription failed");
      }
    } catch {
      setError("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-8 w-full max-w-md rounded-2xl bg-surface p-6 text-center shadow-md sm:mt-12 sm:p-8">
      <h2 className="mb-3 font-display text-2xl font-semibold sm:text-3xl">Get Ember on Sunday</h2>
      <p className="mb-6 text-sm text-muted sm:text-base">
        One email on Sunday. Fast, food, and prayer for the week — not a protocol dump.
      </p>
      {!submitted ? (
        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full rounded-xl border border-border bg-surface p-3 text-base text-fg placeholder:text-muted focus:border-accent focus:outline-none sm:p-4"
            disabled={loading}
            onKeyDown={(e) => e.key === "Enter" && void handleSubscribe()}
          />
          {error && <p className="text-sm text-accent">{error}</p>}
          <button
            onClick={() => void handleSubscribe()}
            disabled={!email.includes("@") || loading}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3 text-base text-surface hover:bg-accent-hover disabled:opacity-50 sm:px-8 sm:py-4 sm:text-lg"
          >
            {loading ? "Sending…" : "Subscribe"} <ArrowRight size={20} />
          </button>
          <p className="text-xs text-muted">Unsubscribe anytime. No spam.</p>
        </div>
      ) : (
        <div className="text-left">
          <p className="mb-4 text-center text-lg font-semibold text-accent sm:text-xl">You’re on the list.</p>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted">
            Welcome gift · {formatIssue(latest)}
          </p>
          <p className="mb-2 font-semibold text-fg">{latest.title}</p>
          <p className="mb-4 text-sm leading-relaxed text-muted">{latest.lede}</p>
          <Link
            to="/ember"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-surface hover:bg-accent-hover"
          >
            Read this week <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
}
