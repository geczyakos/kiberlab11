// Sends a notification to every registered user. Used for
// maintenance announcements and major product updates.

export function broadcastToAllUsers(userStore, notification, sendFn) {
  const users = userStore.all();
  users.forEach((user) => sendFn(user, notification));
  return users.length;
}