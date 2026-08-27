export function deductCredits(creditTracker, accountId, amount) {
  const current = creditTracker.getBalance(accountId);
  creditTracker.setBalance(accountId, current - amount);
}