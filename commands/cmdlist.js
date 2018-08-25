const Discord = require("discord.js");

module.exports.run = async (client, message, args, messages) => {
 message.channel.send(`View my full commands list: \nhttps://docs-ryanbot.glitch.me/`) 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: 'cmdlist',
  category: 'Information',
  description: 'View full commands list on website',
  usage: 'cmdlist'
};