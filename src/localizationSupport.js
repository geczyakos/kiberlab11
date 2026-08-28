const TEMPLATES_BY_LOCALE = {};

export function registerLocaleTemplate(locale, key, template) {
  TEMPLATES_BY_LOCALE[locale] = TEMPLATES_BY_LOCALE[locale] || {};
  TEMPLATES_BY_LOCALE[locale][key] = template;
}

export function getLocaleTemplate(locale, key, fallbackLocale = 'en') {
  return (TEMPLATES_BY_LOCALE[locale] && TEMPLATES_BY_LOCALE[locale][key])
    || (TEMPLATES_BY_LOCALE[fallbackLocale] && TEMPLATES_BY_LOCALE[fallbackLocale][key]);
}