const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'greroll',
  description: 'أمر greroll',
  category: 'admin',
  adminOnly: true,
});
