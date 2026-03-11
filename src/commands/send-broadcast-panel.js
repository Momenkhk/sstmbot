const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'send-broadcast-panel',
  description: 'أمر send-broadcast-panel',
  category: 'admin',
  adminOnly: true,
});
