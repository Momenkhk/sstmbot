const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'suggestion-mode',
  description: 'أمر suggestion-mode',
  category: 'admin',
  adminOnly: true,
});
