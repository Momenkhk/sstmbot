const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'acomnd',
  description: 'أمر acomnd',
  category: 'admin',
  adminOnly: true,
});
