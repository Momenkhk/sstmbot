const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'setvoice',
  description: 'أمر setvoice',
  category: 'admin',
  adminOnly: true,
});
