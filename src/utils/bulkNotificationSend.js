// Sends a notification to a list of recipient ids in one request,
// used by the "notify selected customers" bulk action in the admin
// panel.

export function sendBulk(userStore, recipientIds, notification, sendFn) {
  return recipientIds.map((id) => {
    const user = userStore.get(id);
    if (!user) return { id, sent: false };
    sendFn(user, notification);
    return { id, sent: true };
  });
}