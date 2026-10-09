/**
 * FormSubmit endpoint. The random-string alias stands in for the recipient's
 * address so it never appears in page source or the JS bundle.
 */
export const FORMSUBMIT_ALIAS = "8fdc92dc126ca27d7e5251e2a22f202b";
export const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${FORMSUBMIT_ALIAS}`;

type FormSubmitResponse = { success?: string | boolean; message?: string };

/** POST JSON to FormSubmit. Resolves only when FormSubmit reports success "true". */
export async function submitForm(fields: Record<string, string>) {
  const response = await fetch(FORMSUBMIT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(fields),
  });
  const data = (await response.json().catch(() => ({}))) as FormSubmitResponse;
  if (!response.ok || String(data.success) !== "true") {
    throw new Error(data.message || "Submission failed");
  }
  return data;
}
