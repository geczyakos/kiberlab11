const PRIORITIES = ['low', 'normal', 'high', 'urgent'];

export function normalizePriority(priority) {
  return PRIORITIES.includes(priority) ? priority : 'normal';
}