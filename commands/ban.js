const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  try {
      const settings = message.settings = bot.getGuildSettings(message.guild);
    var modLog = settings.modlogChannel
  let logs = message.guild.channels.find("name", `${modLog}`)
  if(!logs) return message.channel.send("Could not find a logs channel.");

  let user = message.mentions.users.first();
  if(!user) return message.reply("Please mention a user");

  let reason = args.join(" ").slice(22)

  message.guild.member(user).ban(reason || `Banned by ${message.author.tag}: No reason specified...`);

  let logsEmbed = new Discord.RichEmbed() // Master is MessageEmbed
  .setTitle("User Banned")
  .setFooter("Ban Logs")
  .setColor("#ff0000")
  .setTimestamp()
  .addField("Banned User:", `${user}, \nID: ${user.id}`)
  .addField("Reason:", reason || `Banned by ${message.author.tag}: No reason specified...`)
  .addField("Moderator:", `${message.author}, ID: ${message.author.id}`)
  .addField("Time:", message.createdAt)
  .addField("Channel:", message.channel)

  logs.send(logsEmbed);
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!\n**ERROR:**\n${err}`)
      const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on ban Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Administrators"
};

exports.help = {
  name: 'ban',
  category: 'Admin',
  description: 'Bans the mentioned user.',
  usage: 'ban [mention] [reason]'
};
