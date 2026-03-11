const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'close-apply',
  description: 'أمر close-apply',
  category: 'admin',
  adminOnly: true,
});
