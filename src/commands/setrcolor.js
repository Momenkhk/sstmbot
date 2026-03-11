const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'setrcolor',
  description: 'أمر setrcolor',
  category: 'admin',
  adminOnly: true,
});
