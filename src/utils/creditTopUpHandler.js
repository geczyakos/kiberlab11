// Applies a credit top-up (e.g. from a completed payment, or an
// admin manually granting credits) to an account's balance.

export function topUpCredits(creditTracker, accountId, amount) {
  const current = creditTracker.getBalance(accountId);
  creditTracker.setBalance(accountId, current + amount);
  return current + amount;
}