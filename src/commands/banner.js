const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'banner',
  description: 'أمر banner',
  category: 'general',
  adminOnly: false,
});
