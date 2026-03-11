const { EmbedBuilder } = require('discord.js');

function buildHelpEmbed(client) {
  const commands = [...new Set(client.commands.values())];
  const total = commands.length;
  const ownerCommands = commands.filter((c) => c.ownerOnly).length;
  const adminCommands = commands.filter((c) => c.adminOnly && !c.ownerOnly).length;
  const publicCommands = total - ownerCommands - adminCommands;

  return new EmbedBuilder()
    .setColor(0x2b2d31)
    .setTitle('🤖 نظام الأوامر - SSTM')
    .setDescription('البوت منظم جدًا: كل أمر في ملف مستقل + Slash + Text Commands.')
    .addFields(
      { name: 'إجمالي الأوامر', value: `**${total}**`, inline: true },
      { name: 'أوامر Owner', value: `**${ownerCommands}**`, inline: true },
      { name: 'أوامر Admin', value: `**${adminCommands}**`, inline: true },
      { name: 'أوامر عامة', value: `**${publicCommands}**`, inline: true },
      {
        name: 'الأوامر المطلوبة',
        value: '`help` `bots` `status` `line` `addowner` `say` `come`',
      },
    )
    .setFooter({ text: 'تقدر تستخدم /help أو help' });
}

module.exports = {
  buildHelpEmbed,
};
