const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'autoreply-add',
  description: 'أمر autoreply-add',
  category: 'admin',
  adminOnly: true,
});
