export function createBounceTracker() {
  const bounced = new Set();
  return {
    markBounced(email) {
      bounced.add(email);
    },
    shouldSuppress(email) {
      return bounced.has(email);
    },
  };
}