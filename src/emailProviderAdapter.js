export function createEmailAdapter(sendFn) {
  return { send: sendFn, channel: 'email' };
}