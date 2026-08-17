export function createSmsAdapter(sendFn) {
  return { send: sendFn, channel: 'sms' };
}