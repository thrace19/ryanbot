const Discord = require("discord.js");

exports.run = async (anko, message, args, color) => {
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setDescription(`**Permanent Invite Link**: ${invite}`);
    message.channel.send(embed);
  });
}

exports.help = {
  name: 'createinvite',
}