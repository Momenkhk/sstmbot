const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'imagechat',
  description: 'أمر imagechat',
  category: 'admin',
  adminOnly: true,
});
