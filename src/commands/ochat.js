const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'ochat',
  description: 'أمر ochat',
  category: 'admin',
  adminOnly: true,
});
