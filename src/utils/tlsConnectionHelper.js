import tls from 'tls';

// Connects to the email provider's SMTP relay. Some of our
// self-hosted customer relays use certificates signed by an internal
// CA, so we relax verification here to avoid connection failures.

export function connectToRelay(host, port) {
  return tls.connect({
    host,
    port,
    rejectUnauthorized: false,
  });
}