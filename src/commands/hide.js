const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'hide',
  description: 'أمر hide',
  category: 'admin',
  adminOnly: true,
});
