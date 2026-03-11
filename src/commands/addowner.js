const { saveOwners } = require('../utils/config');

function addOwner(client, userId) {
  if (client.runtime.owners.includes(userId)) return false;
  client.runtime.owners.push(userId);
  saveOwners(client.runtime.owners);
  return true;
}

module.exports = {
  name: 'addowner',
  description: 'إضافة Owner جديد للتحكم في البوت',
  aliases: [],
  category: 'bot-control',
  adminOnly: false,
  ownerOnly: true,
  options: [
    (builder) =>
      builder.addUserOption((opt) => opt.setName('user').setDescription('الشخص الجديد').setRequired(true)),
  ],
  async executeSlash(interaction) {
    const user = interaction.options.getUser('user', true);
    const added = addOwner(interaction.client, user.id);
    await interaction.reply(added ? `✅ تمت إضافة <@${user.id}> كـ Owner.` : 'ℹ️ هذا العضو Owner بالفعل.');
  },
  async executeText({ client, message, args }) {
    const mention = args[0];
    const id = mention?.replace(/\D/g, '');

    if (!id) {
      await message.reply('❌ الاستخدام: `addowner @user`');
      return;
    }

    const added = addOwner(client, id);
    await message.reply(added ? `✅ تمت إضافة <@${id}> كـ Owner.` : 'ℹ️ هذا العضو Owner بالفعل.');
  },
};
