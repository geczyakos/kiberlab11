export function validateTemplateVariables(template, variables) {
  const required = [...template.matchAll(/\{\{(\w+)\}\}/g)].map((m) => m[1]);
  const missing = required.filter((key) => !(key in variables));
  return { valid: missing.length === 0, missing };
}