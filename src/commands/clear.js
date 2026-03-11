const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'clear',
  description: 'أمر clear',
  category: 'admin',
  adminOnly: true,
});
