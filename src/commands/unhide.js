const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'unhide',
  description: 'أمر unhide',
  category: 'admin',
  adminOnly: true,
});
