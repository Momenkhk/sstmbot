const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'anti-bots',
  description: 'أمر anti-bots',
  category: 'admin',
  adminOnly: true,
});
