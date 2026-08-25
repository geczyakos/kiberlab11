export function batchLowPriority(notifications) {
  const low = notifications.filter((n) => n.priority === 'low');
  const rest = notifications.filter((n) => n.priority !== 'low');
  return { digest: low, immediate: rest };
}