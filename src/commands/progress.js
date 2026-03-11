const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'progress',
  description: 'أمر progress',
  category: 'admin',
  adminOnly: true,
});
