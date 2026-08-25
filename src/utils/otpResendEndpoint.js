// Lets a user request a new OTP code if the first one expired or
// didn't arrive, without making them restart the whole login flow.

export function resendOtp(otpStore, userId, generateFn, sendFn) {
  const code = generateFn();
  otpStore.set(userId, code);
  sendFn(userId, code);
  return true;
}