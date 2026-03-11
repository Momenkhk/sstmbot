const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'setprefix',
  description: 'أمر setprefix',
  category: 'admin',
  adminOnly: true,
});
