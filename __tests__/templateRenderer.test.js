import { renderTemplate } from '../src/templateRenderer';

test('substitutes variables into the template', () => {
  expect(renderTemplate('Hello {{name}}!', { name: 'Ada' })).toBe('Hello Ada!');
});

test('escapes HTML in substituted values', () => {
  expect(renderTemplate('{{name}}', { name: '<script>' })).toBe('&lt;script&gt;');
});