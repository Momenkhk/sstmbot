const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'set-tax-room',
  description: 'أمر set-tax-room',
  category: 'admin',
  adminOnly: true,
});
