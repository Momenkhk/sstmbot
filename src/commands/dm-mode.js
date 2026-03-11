const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'dm-mode',
  description: 'أمر dm-mode',
  category: 'admin',
  adminOnly: true,
});
