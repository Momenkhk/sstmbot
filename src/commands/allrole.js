const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'allrole',
  description: 'أمر allrole',
  category: 'admin',
  adminOnly: true,
});
