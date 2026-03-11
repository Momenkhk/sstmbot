const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'ban',
  description: 'أمر ban',
  category: 'admin',
  adminOnly: true,
});
