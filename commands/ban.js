const Discord = require("discord.js");
const errors = require("../util/errors.js");

module.exports.run = async (bot, message, args) => {
  try {
    message.delete();
    if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
    if(args[0] == "help"){
      message.reply("Usage: .ban <user> <reason>");
      return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return errors.cantfindUser(message.channel);
    if(bUser.id === bot.user.id) return errors.botuser(message); 
    let bReason = args.join(" ").slice(22);
    if(!bReason) return errors.noReason(message.channel);
    if(bUser.hasPermission("MANAGE_SERVER")) return errors.equalPerms(message, bUser, "MANAGE_SERVER");

    let banEmbed = new Discord.RichEmbed()
    .setTitle('User Banned!')
    .setColor("#bc0000")
    .addField("Banned User", `${bUser.tag}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason || "No reason specified..");

    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    if(!incidentchannel) return message.channel.send("Can't find mod-log channel!");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on ban commands!\n\nError:\n\n ${err}`)
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
