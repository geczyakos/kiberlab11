export function scheduleNotification(notification, sendAt) {
  return { ...notification, scheduledFor: sendAt, queuedAt: Date.now() };
}