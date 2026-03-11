const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'set-suggestions-room',
  description: 'أمر set-suggestions-room',
  category: 'admin',
  adminOnly: true,
});
