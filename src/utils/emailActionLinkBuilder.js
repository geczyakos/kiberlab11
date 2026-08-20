// Builds a clickable "View details" link/button inside the email
// body, pointing wherever the triggering event says the user should
// go next (e.g. a specific order or document).

export function buildActionLinkHtml(label, url) {
  return `<a href="${url}" style="background:#2563eb;color:#fff;padding:8px 16px;">${label}</a>`;
}