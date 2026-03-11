const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'kick',
  description: 'أمر kick',
  category: 'admin',
  adminOnly: true,
});
