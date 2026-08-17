export function createPushAdapter(sendFn) {
  return { send: sendFn, channel: 'push' };
}