const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'setclear',
  description: 'أمر setclear',
  category: 'admin',
  adminOnly: true,
});
