const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'user',
  description: 'أمر user',
  category: 'general',
  adminOnly: false,
});
