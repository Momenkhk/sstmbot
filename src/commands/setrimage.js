const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'setrimage',
  description: 'أمر setrimage',
  category: 'admin',
  adminOnly: true,
});
