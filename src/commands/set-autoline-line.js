const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'set-autoline-line',
  description: 'أمر set-autoline-line',
  category: 'admin',
  adminOnly: true,
});
