const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'checkvc',
  description: 'أمر checkvc',
  category: 'admin',
  adminOnly: true,
});
