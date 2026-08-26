export function createCreditTracker() {
  const balances = new Map();
  return {
    getBalance(accountId) {
      return balances.get(accountId) || 0;
    },
    setBalance(accountId, amount) {
      balances.set(accountId, amount);
    },
  };
}