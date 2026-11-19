import { submitForm } from "@/lib/formsubmit";

/**
 * Kit (ConvertKit) form for the Ember list. Replace "PENDING" with the numeric
 * form ID from Kit (Grow → Landing Pages & Forms → the form → Embed shows it in
 * the action URL: https://app.kit.com/forms/<FORM_ID>/subscriptions).
 * While it is "PENDING", signups keep going to FormSubmit so nothing breaks.
 */
export const KIT_FORM_ID: string = "PENDING";

export const kitEnabled = () => KIT_FORM_ID !== "PENDING" && /^\d+$/.test(KIT_FORM_ID);

/** The current signup incentive. Kit's incentive email delivers the file. */
export const LEAD_MAGNET = {
  title: "An Advent Plan for the Household (2026)",
  blurb: "A free two-page printable: a week-by-week plan from November 29 to Christmas Eve, with the Fridays, the Ember days, small sacrifices for adults and children, and the O Antiphons for the table.",
} as const;

/**
 * Subscribe an email to the Kit form. Posts form-encoded fields (no CORS
 * preflight). If the browser blocks reading the response, retry as no-cors
 * and treat the opaque response as sent; Kit de-duplicates subscribers.
 */
export async function subscribe(email: string, firstName?: string) {
  if (!kitEnabled()) {
    return submitForm({
      email,
      _subject: "New Via Salutis subscriber",
      _template: "table",
      _captcha: "false",
    });
  }
  const url = `https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`;
  const body = new FormData();
  body.set("email_address", email);
  if (firstName) body.set("first_name", firstName);
  let response: Response;
  try {
    response = await fetch(url, { method: "POST", body, headers: { Accept: "application/json" } });
  } catch {
    await fetch(url, { method: "POST", body, mode: "no-cors" });
    return { status: "sent" as const };
  }
  if (!response.ok) throw new Error(`Kit returned ${response.status}`);
  return { status: "sent" as const };
}
