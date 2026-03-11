const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'ticimage',
  description: 'أمر ticimage',
  category: 'admin',
  adminOnly: true,
});
