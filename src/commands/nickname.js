const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'nickname',
  description: 'أمر nickname',
  category: 'admin',
  adminOnly: true,
});
