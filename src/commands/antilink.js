const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'antilink',
  description: 'أمر antilink',
  category: 'admin',
  adminOnly: true,
});
