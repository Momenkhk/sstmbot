const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'wordlist',
  description: 'أمر wordlist',
  category: 'admin',
  adminOnly: true,
});
