const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'allow',
  description: 'أمر allow',
  category: 'admin',
  adminOnly: true,
});
