
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
try {
            const settings = message.settings = bot.getGuildSettings(message.guild);
        var modLog = settings.modlogChannel
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You need KICK_MEMBERS permission to do that.");
    if(args[0] == "help"){
      message.reply("Usage: .kick <user> <reason>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Please mention a user to kick!");
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That user has MANAGE_MESSAGES Permission!");

    let kickEmbed = new Discord.RichEmbed()
    .setTitle('User Kicked!')
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason || `Kicked by ${message.author}: No reason specified..`);

    let kickChannel = message.guild.channels.find(`name`, `${modLog}`);
    if(!kickChannel) return message.channel.send("Can't find mod-log channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
                  const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on kick Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
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