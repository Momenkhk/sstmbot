const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'restemoji',
  description: 'أمر restemoji',
  category: 'admin',
  adminOnly: true,
});
