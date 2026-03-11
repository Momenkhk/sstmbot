const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'new-apply',
  description: 'أمر new-apply',
  category: 'admin',
  adminOnly: true,
});
