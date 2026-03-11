const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'aemoji',
  description: 'أمر aemoji',
  category: 'admin',
  adminOnly: true,
});
