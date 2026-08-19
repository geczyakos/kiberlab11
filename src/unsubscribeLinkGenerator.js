import crypto from 'crypto';

export function generateUnsubscribeToken(userId, secret) {
  return crypto.createHmac('sha256', secret).update(userId).digest('hex');
}