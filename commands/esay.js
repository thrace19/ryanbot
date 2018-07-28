const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  try {
    
  //!say Hi!
  //Hi
  if(!message.member.hasPermission("SEND_MESSAGES")) return message.reply("no");
  let botmessage = args.join(" ");
    let say = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(botmessage)
    .setColor('#e00707')
    .setTimestamp()
  message.channel.send(say);
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on esay commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['embedsay', 'emsay'],
  permLevel: "Users"
};

exports.help = {
  name: 'esay',
  category: 'Util',
  description: 'Make copy of your previous text',
  usage: 'say [text]'
};