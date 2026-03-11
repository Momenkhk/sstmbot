const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'pic',
  description: 'أمر pic',
  category: 'admin',
  adminOnly: true,
});
