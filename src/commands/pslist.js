const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'pslist',
  description: 'أمر pslist',
  category: 'admin',
  adminOnly: true,
});
