
const Discord = require("discord.js");
const errors = require("../util/errors.js");

module.exports.run = async (bot, message, args) => {
try {
    if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
    if(args[0] == "help"){
      message.reply("Usage: .kick <user> <reason>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return errors.cantfindUser(message.channel);
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, kUser, "MANAGE_MESSAGES");

    let kickEmbed = new Discord.RichEmbed()
    .setTitle('User Kicked!')
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason || "No reason specified..");

    let kickChannel = message.guild.channels.find(`name`, "mod-log");
    if(!kickChannel) return message.channel.send("Can't find mod-log channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on kick commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 'Moderators'
};

exports.help = {
  name: 'kick',
  category: 'Mod',
  description: 'Kicks the mentioned user.',
  usage: 'kick [mention] [reason]'
};