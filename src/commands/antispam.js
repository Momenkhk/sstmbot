const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'antispam',
  description: 'أمر antispam',
  category: 'admin',
  adminOnly: true,
});
