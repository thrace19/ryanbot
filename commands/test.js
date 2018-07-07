const Discord = require("discord.js");
const send = require('quick.hook')

module.exports.run = async (bot, message, args) => {
  try {
  //!say Hi!
  //Hi
  if(!message.member.hasPermission("SEND_MESSAGES")) return message.reply("no");
  const letchnl = bot.channels.get('442218090109992974')
  let botmessage = args.join(" ");
  message.delete().catch();
    send(letchnl, botmessage, {
        name: `RyansHDs`,
      icon: `https://cdn.discordapp.com/attachments/421620705570979843/465092259906453524/kazane.png`
    })
  } catch(err) {console.log(`Error with say \n${err}`)}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owners"
};

exports.help = {
  name: 'test',
  category: 'Util',
  description: 'Make copy of your previous text',
  usage: 'test [text]'
};