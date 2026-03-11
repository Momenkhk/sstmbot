const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'protection-status',
  description: 'أمر protection-status',
  category: 'admin',
  adminOnly: true,
});
