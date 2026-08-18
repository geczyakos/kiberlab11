export function createDeliveryTracker() {
  const statuses = new Map();
  return {
    setStatus(notificationId, status) {
      statuses.set(notificationId, status);
    },
    getStatus(notificationId) {
      return statuses.get(notificationId) || 'pending';
    },
  };
}