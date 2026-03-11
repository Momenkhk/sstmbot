const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'add-nadeko-room',
  description: 'أمر add-nadeko-room',
  category: 'admin',
  adminOnly: true,
});
