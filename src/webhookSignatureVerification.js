import crypto from 'crypto';

export function verifyWebhookSignature(rawBody, signatureHeader, secret) {
  const expected = crypto.createHmac('sha256', secret).update(rawBody).digest();
  const provided = Buffer.from(signatureHeader, 'hex');
  if (provided.length !== expected.length) return false;
  return crypto.timingSafeEqual(expected, provided);
}