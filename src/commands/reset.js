const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'reset',
  description: 'أمر reset',
  category: 'admin',
  adminOnly: true,
});
