const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'block',
  description: 'أمر block',
  category: 'admin',
  adminOnly: true,
});
