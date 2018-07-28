const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  try {
  //!say Hi!
  //Hi
  if(!message.member.hasPermission("SEND_MESSAGES")) return message.reply("no");
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on say commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: 'say',
  category: 'Util',
  description: 'Make copy of your previous text',
  usage: 'say [text]'
};