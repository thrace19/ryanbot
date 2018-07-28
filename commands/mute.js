const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  try {
message.delete();
  
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You need `MANAGE_ROLES` Permission to do this!");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(tomute === message.guild.member(message.author)) return message.channel.send("You Can't Mute yourself!")
  if(!tomute) return message.channel.send("Couldn't find user.");
  let muterole = message.guild.roles.find(`name`, "muted");

let reason = args.join(" ").slice(22)
  await(tomute.addRole(muterole.id));
  let muteEmbed = new Discord.RichEmbed()
  .setTitle("Mute")
  .setColor("#fc6400")
  .addField("User", tomute.user.tag)
  .addField("Moderator", message.author.tag)
  .addField("Reason", `${reason}`)
  .setTimestamp();
 message.channel.send(`**${tomute.user.tag}** has been muted!`)
let channel= message.guild.channels.find(`name`, 'mod-log')
if(!channel) return message.channel.send("Can't find mod-log Channel! Please Create one!")
  channel.send(muteEmbed)
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on mute commands!\n\nError:\n\n ${err}`)
    }
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Moderators"
}

module.exports.help = {
  name: "mute",
  category: 'Mod',
  description: 'Mute mentioned User!',
  usage: 'mute <mention>',
}