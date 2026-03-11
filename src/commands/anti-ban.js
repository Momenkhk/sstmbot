const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'anti-ban',
  description: 'أمر anti-ban',
  category: 'admin',
  adminOnly: true,
});
