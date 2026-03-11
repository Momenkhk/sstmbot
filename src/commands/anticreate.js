const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'anticreate',
  description: 'أمر anticreate',
  category: 'admin',
  adminOnly: true,
});
