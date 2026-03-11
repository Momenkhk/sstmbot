const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'set-feedback-line',
  description: 'أمر set-feedback-line',
  category: 'admin',
  adminOnly: true,
});
