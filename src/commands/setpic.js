const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'setpic',
  description: 'أمر setpic',
  category: 'admin',
  adminOnly: true,
});
