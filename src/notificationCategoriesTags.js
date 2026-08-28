export function addCategory(notification, category) {
  return { ...notification, categories: [...(notification.categories || []), category] };
}