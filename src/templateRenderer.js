function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function renderTemplate(template, variables = {}) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    const value = variables[key];
    return value === undefined ? '' : escapeHtml(value);
  });
}