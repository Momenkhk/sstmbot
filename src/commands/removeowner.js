const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'removeowner',
  description: 'أمر removeowner',
  category: 'admin',
  adminOnly: true,
});
