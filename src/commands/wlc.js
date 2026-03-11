const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'wlc',
  description: 'أمر wlc',
  category: 'admin',
  adminOnly: true,
});
