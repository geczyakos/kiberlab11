export function createPreferencesStore() {
  const prefs = new Map();
  return {
    setPreference(userId, channel, enabled) {
      const userPrefs = prefs.get(userId) || {};
      userPrefs[channel] = enabled;
      prefs.set(userId, userPrefs);
    },
    isEnabled(userId, channel) {
      const userPrefs = prefs.get(userId) || {};
      return userPrefs[channel] !== false;
    },
  };
}