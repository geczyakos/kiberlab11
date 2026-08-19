export function createHistoryLog() {
  const entries = [];
  return {
    record(userId, notification) {
      entries.push({ userId, notification, sentAt: Date.now() });
    },
    forUser(userId) {
      return entries.filter((e) => e.userId === userId);
    },
  };
}