const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'tcrole',
  description: 'أمر tcrole',
  category: 'admin',
  adminOnly: true,
});
