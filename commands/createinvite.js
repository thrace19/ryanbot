const Discord = require("discord.js");

exports.run = async (anko, message, args, color) => {
  try {
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setDescription(`**Permanent Invite Link**: ${invite}`);
    message.channel.send(embed);
  });
    } catch(err) {console.log(`Error with createinvite \n${err}`)}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: 'createinvite',
  category: 'Util',
  description: 'Make a new invite link from specific channel',
  usage: 'createinvite'
}