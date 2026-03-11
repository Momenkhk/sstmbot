const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'avatar',
  description: 'أمر avatar',
  category: 'general',
  adminOnly: false,
});
