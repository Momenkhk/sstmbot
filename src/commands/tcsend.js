const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'tcsend',
  description: 'أمر tcsend',
  category: 'admin',
  adminOnly: true,
});
