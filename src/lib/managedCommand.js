const { getGuildData, updateGuildData } = require('./guildStore');

function getTargetMember(message, args) {
  const id = args[0]?.replace(/\D/g, '');
  if (!id) return null;
  return message.guild.members.cache.get(id) || null;
}

async function runManagedText({ name, message, args, client }) {
  const guildId = message.guild.id;

  if (name === 'ping') return message.reply(`🏓 ${client.ws.ping}ms`);
  if (name === 'server') return message.reply(`🛡️ ${message.guild.name}\n👥 ${message.guild.memberCount}`);
  if (name === 'roles') return message.reply(`🎭 عدد الرتب: ${message.guild.roles.cache.size}`);
  if (name === 'bots') return message.reply(`🤖 ${message.guild.members.cache.filter((m) => m.user.bot).size}`);

  if (name === 'lock') {
    await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, { SendMessages: false });
    return message.reply('✅ تم قفل الروم.');
  }
  if (name === 'unlock') {
    await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, { SendMessages: null });
    return message.reply('✅ تم فتح الروم.');
  }
  if (name === 'hide') {
    await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, { ViewChannel: false });
    return message.reply('✅ تم اخفاء الروم.');
  }
  if (name === 'unhide') {
    await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, { ViewChannel: null });
    return message.reply('✅ تم اظهار الروم.');
  }
  if (name === 'clear') {
    const amount = Number(args[0] || 10);
    const n = Math.min(Math.max(amount, 1), 100);
    await message.channel.bulkDelete(n, true);
    return message.channel.send(`✅ تم حذف ${n} رسالة.`);
  }
  if (name === 'slowmode') {
    const seconds = Number(args[0] || 0);
    await message.channel.setRateLimitPerUser(Math.max(0, Math.min(seconds, 21600)));
    return message.reply('✅ تم تعديل السلو مود.');
  }

  if (name === 'kick') {
    const m = getTargetMember(message, args);
    if (!m) return message.reply('❌ اكتب منشن/ايدي عضو.');
    await m.kick();
    return message.reply(`✅ تم طرد ${m.user.tag}`);
  }
  if (name === 'ban') {
    const m = getTargetMember(message, args);
    if (!m) return message.reply('❌ اكتب منشن/ايدي عضو.');
    await m.ban();
    return message.reply(`✅ تم حظر ${m.user.tag}`);
  }
  if (name === 'timeout' || name === 'mute') {
    const m = getTargetMember(message, args);
    if (!m) return message.reply('❌ اكتب منشن/ايدي عضو.');
    const minutes = Number(args[1] || 10);
    await m.timeout(minutes * 60 * 1000, 'Command action');
    return message.reply(`✅ تم تايم اوت ${m.user.tag} لمدة ${minutes} دقيقة.`);
  }
  if (name === 'unmute') {
    const m = getTargetMember(message, args);
    if (!m) return message.reply('❌ اكتب منشن/ايدي عضو.');
    await m.timeout(null);
    return message.reply(`✅ تم فك التايم اوت عن ${m.user.tag}.`);
  }
  if (name === 'nickname' || name === 'nick') {
    const m = getTargetMember(message, args);
    if (!m) return message.reply('❌ اكتب منشن/ايدي عضو.');
    const newName = args.slice(1).join(' ');
    await m.setNickname(newName || null);
    return message.reply('✅ تم تعديل النك نيم.');
  }

  if (name === 'role') {
    const m = getTargetMember(message, args);
    const roleId = args[1]?.replace(/\D/g, '');
    const role = roleId ? message.guild.roles.cache.get(roleId) : null;
    if (!m || !role) return message.reply('❌ الاستخدام: role @user @role');
    if (m.roles.cache.has(role.id)) await m.roles.remove(role);
    else await m.roles.add(role);
    return message.reply('✅ تم تعديل الرتبة.');
  }

  if (name === 'warn') {
    const m = getTargetMember(message, args);
    if (!m) return message.reply('❌ الاستخدام: warn @user السبب');
    const reason = args.slice(1).join(' ') || 'بدون سبب';
    updateGuildData(guildId, (data) => {
      if (!data.warns[m.id]) data.warns[m.id] = [];
      data.warns[m.id].push({ reason, at: Date.now(), by: message.author.id });
    });
    return message.reply(`✅ تم تحذير ${m.user.tag}`);
  }
  if (name === 'warnings') {
    const m = getTargetMember(message, args);
    if (!m) return message.reply('❌ الاستخدام: warnings @user');
    const data = getGuildData(guildId);
    const list = data.warns[m.id] || [];
    return message.reply(list.length ? `⚠️ تحذيرات ${m.user.tag}: ${list.length}` : '✅ لا يوجد تحذيرات.');
  }
  if (name === 'remove-warn') {
    const m = getTargetMember(message, args);
    if (!m) return message.reply('❌ الاستخدام: remove-warn @user');
    updateGuildData(guildId, (data) => { data.warns[m.id] = []; });
    return message.reply('✅ تم حذف التحذيرات.');
  }

  if (name === 'autoreply-add') {
    const trigger = args[0]?.toLowerCase();
    const reply = args.slice(1).join(' ');
    if (!trigger || !reply) return message.reply('❌ الاستخدام: autoreply-add كلمة الرد');
    updateGuildData(guildId, (data) => { data.autoReplies[trigger] = reply; });
    return message.reply('✅ تم إضافة الرد التلقائي.');
  }
  if (name === 'autoreply-remove') {
    const trigger = args[0]?.toLowerCase();
    if (!trigger) return message.reply('❌ الاستخدام: autoreply-remove كلمة');
    updateGuildData(guildId, (data) => { delete data.autoReplies[trigger]; });
    return message.reply('✅ تم حذف الرد التلقائي.');
  }
  if (name === 'autoreply-list') {
    const data = getGuildData(guildId);
    const keys = Object.keys(data.autoReplies);
    return message.reply(keys.length ? `📋 ${keys.join(', ')}` : 'لا يوجد ردود تلقائية.');
  }

  // Settings-like commands (setups, protection, modes, tickets...)
  const setLike = [
    'set-ticket-log','setup-apply','setup-logs','setup-rating','setup-ticket','setup-welcome','suggestion-mode','tax-mode','line-mode',
    'set-protect-logs','set-shortcut','set-suggestions-line','set-suggestions-room','set-tax-line','set-tax-room','set-autoline-line',
    'set-feedback-line','set-feedback-room','set-message','setlog','detlog','setclear','wlc','avt','locomnd','setvoice','progress','reset-all','reset','rlevel',
    'tipanel','ticlog','tcsend','tcopen','setticket','tcrole','tcrestart','ticimage','allow','deny','imagechat','ctcolors','setpic','unpic','setrchat','dltrchat','setrimage','setrcolor',
    'word','wordlist','pslist','restbackup','restemoji','block','unblock','setsecurity','wanti','wantilist','setrjoin','antijoin','antibots','antilink','antidelete','anticreate','antispam',
    'anti-ban','anti-bots','anti-delete-roles','anti-delete-rooms','protection-status','remove-all-tokens','remove-autoline-channel','remove-nadeko-room','remove-token','to-select'
  ];

  if (setLike.includes(name)) {
    const value = args.join(' ') || 'enabled';
    updateGuildData(guildId, (data) => { data.settings[name] = value; });
    return message.reply(`✅ تم حفظ إعداد ${name}: ${value}`);
  }

  if (name === 'avatar') {
    const target = getTargetMember(message, args) || message.member;
    return message.reply(target.user.displayAvatarURL({ size: 1024 }));
  }

  if (name === 'user') {
    const target = getTargetMember(message, args) || message.member;
    return message.reply(`👤 ${target.user.tag}\n🆔 ${target.id}`);
  }

  return message.reply(`✅ الأمر ${name} جاهز.`);
}

function createManagedCommand({ name, description, category = 'admin', adminOnly = true, ownerOnly = false, aliases = [] }) {
  return {
    name,
    description,
    aliases,
    category,
    adminOnly,
    ownerOnly,
    options: [],
    async executeSlash(interaction) {
      await interaction.reply(`✅ الأمر ${name} جاهز للاستخدام النصي أو حسب الإعدادات.`);
    },
    async executeText(ctx) {
      await runManagedText({ name, ...ctx });
    },
  };
}

module.exports = {
  createManagedCommand,
};
