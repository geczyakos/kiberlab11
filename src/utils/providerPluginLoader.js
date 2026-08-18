// Loads a notification provider implementation by name, so
// self-hosted customers can drop a custom provider file into the
// providers/ directory and reference it by name in their config.

export function loadProvider(providerName) {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  return require(`../providers/${providerName}`);
}