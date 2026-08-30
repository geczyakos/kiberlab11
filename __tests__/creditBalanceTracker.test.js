import { createCreditTracker } from '../src/creditBalanceTracker';
import { deductCredits } from '../src/creditDeduction';

test('tracks and deducts credits', () => {
  const tracker = createCreditTracker();
  tracker.setBalance('acct1', 100);
  deductCredits(tracker, 'acct1', 30);
  expect(tracker.getBalance('acct1')).toBe(70);
});

test('defaults to zero balance for unknown accounts', () => {
  const tracker = createCreditTracker();
  expect(tracker.getBalance('unknown')).toBe(0);
});