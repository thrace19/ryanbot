const Discord = require("discord.js");
const send = require('quick.hook')

module.exports.run = async (bot, message, args) => {
  const chnl = bot.channels.get('467929835981766657')
  let botmessage = args.join(" ");
  message.delete()
  send(chnl, botmessage, {
    name: 'RyanBot (r!)',
  })
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Owners"
};

exports.help = {
  name: 'tr',
  category: 'util',
  description: 'Check info of mentioned user!',
  usage: 'userinfo [mention]'
};