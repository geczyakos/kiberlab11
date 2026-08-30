# notification-toolkit

A small, dependency-light multi-channel notification library for
Node.js: email, SMS, and push, with templates, delivery tracking,
webhooks, and credit/quota management.

## Installation

```
npm install notification-toolkit
```

## Utilities

- `renderTemplate` / `validateTemplateVariables` – templating
- `createEmailAdapter` / `createSmsAdapter` / `createPushAdapter` – provider adapters
- `connectToRelay` – SMTP relay TLS connection
- `createQueue` – notification queue
- `broadcastToAllUsers` / `sendBulk` – mass sending
- `createDeliveryTracker` / `withRetry` – delivery reliability
- `loadProvider` – custom provider plugin loading
- `createPreferencesStore` / `createHistoryLog` – per-user state
- `handleApiError` – API error responses
- `generateUnsubscribeToken` – unsubscribe links
- `buildActionLinkHtml` – email action links
- `normalizePriority` / `scheduleNotification` / `batchLowPriority` – delivery timing
- `createReadTracker` – read/unread state
- `resendOtp` / `generateOtp` – OTP flow
- `deliverWebhook` / `verifyWebhookSignature` / `getWebhookSecret` – webhooks
- `buildEmailHeaders` – raw email headers
- `createCreditTracker` / `deductCredits` / `topUpCredits` – credits/quota
- `buildDashboardSummary` – admin summary
- `addCategory` – categorization
- `registerLocaleTemplate` / `getLocaleTemplate` – localization
- `createBounceTracker` – bounce/complaint suppression

## Usage

```js
import { renderTemplate, createQueue } from 'notification-toolkit';

const body = renderTemplate('Hi {{name}}, your order shipped!', { name: 'Ada' });
const queue = createQueue();
queue.enqueue({ body, channel: 'email' });
```

## License

MIT