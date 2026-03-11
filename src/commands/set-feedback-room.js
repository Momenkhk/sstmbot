const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'set-feedback-room',
  description: 'أمر set-feedback-room',
  category: 'admin',
  adminOnly: true,
});
