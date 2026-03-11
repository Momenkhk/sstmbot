const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'stickers',
  description: 'أمر stickers',
  category: 'admin',
  adminOnly: true,
});
