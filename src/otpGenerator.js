import crypto from 'crypto';

export function generateOtp(digits = 6) {
  const max = 10 ** digits;
  return crypto.randomInt(0, max).toString().padStart(digits, '0');
}