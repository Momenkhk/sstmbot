const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'feedback-mode',
  description: 'أمر feedback-mode',
  category: 'admin',
  adminOnly: true,
});
