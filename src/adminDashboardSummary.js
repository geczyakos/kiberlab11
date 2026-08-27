export function buildDashboardSummary(historyLog, userId) {
  const sent = historyLog.forUser(userId).length;
  return { totalSent: sent };
}