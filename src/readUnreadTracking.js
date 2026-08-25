export function createReadTracker() {
  const read = new Set();
  return {
    markRead(notificationId) {
      read.add(notificationId);
    },
    isRead(notificationId) {
      return read.has(notificationId);
    },
  };
}