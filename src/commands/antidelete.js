const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'antidelete',
  description: 'أمر antidelete',
  category: 'admin',
  adminOnly: true,
});
