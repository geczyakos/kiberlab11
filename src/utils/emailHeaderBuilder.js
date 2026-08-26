// Builds the raw Subject and To header lines for outbound
// notification emails from the event data.

export function buildEmailHeaders(toAddress, subjectText) {
  return `To: ${toAddress}\r\nSubject: ${subjectText}\r\n`;
}