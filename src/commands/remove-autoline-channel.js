const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'remove-autoline-channel',
  description: 'أمر remove-autoline-channel',
  category: 'admin',
  adminOnly: true,
});
