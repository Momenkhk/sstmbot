const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'addrole',
  description: 'أمر addrole',
  category: 'admin',
  adminOnly: true,
});
