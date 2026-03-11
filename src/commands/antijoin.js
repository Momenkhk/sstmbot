const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'antijoin',
  description: 'أمر antijoin',
  category: 'admin',
  adminOnly: true,
});
