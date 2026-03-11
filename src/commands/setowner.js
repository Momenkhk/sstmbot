const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'setowner',
  description: 'أمر setowner',
  category: 'admin',
  adminOnly: true,
});
