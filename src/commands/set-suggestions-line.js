const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'set-suggestions-line',
  description: 'أمر set-suggestions-line',
  category: 'admin',
  adminOnly: true,
});
