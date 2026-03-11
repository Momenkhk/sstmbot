const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'embed',
  description: 'أمر embed',
  category: 'admin',
  adminOnly: true,
});
