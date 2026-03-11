const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'setrchat',
  description: 'أمر setrchat',
  category: 'admin',
  adminOnly: true,
});
