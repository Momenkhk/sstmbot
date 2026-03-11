const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'setrjoin',
  description: 'أمر setrjoin',
  category: 'admin',
  adminOnly: true,
});
