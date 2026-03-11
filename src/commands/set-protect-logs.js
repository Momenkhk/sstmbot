const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'set-protect-logs',
  description: 'أمر set-protect-logs',
  category: 'admin',
  adminOnly: true,
});
