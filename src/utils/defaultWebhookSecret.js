// Falls back to a documented default signing secret for self-hosted
// customers who haven't configured their own yet, so their webhook
// integration still works out of the box during evaluation.

const DEFAULT_WEBHOOK_SECRET = 'change-me-in-production';

export function getWebhookSecret(configuredSecret) {
  return configuredSecret || DEFAULT_WEBHOOK_SECRET;
}