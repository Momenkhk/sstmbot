const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'add-autoline-channel',
  description: 'أمر add-autoline-channel',
  category: 'admin',
  adminOnly: true,
});
