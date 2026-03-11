const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'mhide',
  description: 'أمر mhide',
  category: 'admin',
  adminOnly: true,
});
