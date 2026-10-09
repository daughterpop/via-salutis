import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { submitForm } from "@/lib/formsubmit";
import { pageHead } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact",
      description: `Write to ${SITE.name}: questions on fasting and abstinence, corrections, Ember, or the shop. Every message is read.`,
      path: "/contact",
    }),
  component: ContactPage,
});

const inputClass =
  "w-full rounded-xl border border-border bg-surface p-3 text-base text-fg placeholder:text-muted focus:border-accent focus:outline-none";
const labelClass = "mb-1.5 block text-sm font-semibold text-fg";

type Status = "idle" | "sending" | "sent" | "error";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const ready = name.trim() !== "" && email.includes("@") && message.trim() !== "";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ready || status === "sending") return;
    setStatus("sending");
    try {
      await submitForm({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        _honey: honey,
        _replyto: email.trim(),
        _subject: "Via Salutis contact message",
        _template: "table",
        _captcha: "false",
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-sm font-medium text-accent">Write to the house</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-fg sm:text-4xl">Contact</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        A question about the fast, a correction to the calendar, a word about Ember or the shop. Every message is
        read, and answered when it asks for an answer.
      </p>

      {status === "sent" ? (
        <div className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-8" role="status">
          <p className="font-display text-xl font-semibold text-accent">Thank you. Your message is on its way.</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            If you asked something, the reply will come to {email.trim() || "the address you gave"}.
          </p>
          <Link
            to="/fasting"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-surface hover:bg-accent-hover"
          >
            Back to the fasting calendar <ArrowRight size={16} />
          </Link>
        </div>
      ) : (
        <form
          onSubmit={(e) => void handleSubmit(e)}
          className="mt-8 space-y-5 rounded-2xl border border-border bg-surface p-6 sm:p-8"
          noValidate
        >
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
              disabled={status === "sending"}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              disabled={status === "sending"}
            />
          </div>
          <div>
            <label htmlFor="contact-message" className={labelClass}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={inputClass}
              disabled={status === "sending"}
            />
          </div>
          <div className="hidden" aria-hidden="true">
            <label htmlFor="contact-honey">Leave this field empty</label>
            <input
              id="contact-honey"
              name="_honey"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honey}
              onChange={(e) => setHoney(e.target.value)}
            />
          </div>
          {status === "error" && (
            <p className="text-sm text-accent" role="alert">
              Something went wrong and the message was not sent. Please try again in a little while.
            </p>
          )}
          <button
            type="submit"
            disabled={!ready || status === "sending"}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3 text-base text-surface hover:bg-accent-hover disabled:opacity-50 sm:w-auto sm:px-8"
          >
            {status === "sending" ? "Sending…" : "Send message"} <ArrowRight size={18} />
          </button>
          <p className="text-xs text-muted">Your address is used only to reply to you. It is never added to Ember without asking.</p>
        </form>
      )}
    </main>
  );
}
