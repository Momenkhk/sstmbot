const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'setticket',
  description: 'أمر setticket',
  category: 'admin',
  adminOnly: true,
});
