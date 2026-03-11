const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'unlock',
  description: 'أمر unlock',
  category: 'admin',
  adminOnly: true,
});
