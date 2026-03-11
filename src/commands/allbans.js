const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'allbans',
  description: 'أمر allbans',
  category: 'admin',
  adminOnly: true,
});
