const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'remove-nadeko-room',
  description: 'أمر remove-nadeko-room',
  category: 'admin',
  adminOnly: true,
});
