const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'copy-emoji',
  description: 'أمر copy-emoji',
  category: 'admin',
  adminOnly: true,
});
