const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'restbackup',
  description: 'أمر restbackup',
  category: 'admin',
  adminOnly: true,
});
