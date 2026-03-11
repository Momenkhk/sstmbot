const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'unmute',
  description: 'أمر unmute',
  category: 'admin',
  adminOnly: true,
});
