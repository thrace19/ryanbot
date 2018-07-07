const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  try {
message.delete();
  
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You need `MANAGE_ROLES` Permission to do this!");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  let muterole = message.guild.roles.find(`name`, "muted");
  
  if(!muterole) return message.channel.send("I can't find role called `muted` Please Create one!")
  

  await(tomute.removeRole(muterole.id));
  let reason = args.join(" ").slice(22)
    let Embed = new Discord.RichEmbed()
  .setTitle("Un-Mute")
  .setColor("#fc6400")
  .addField("User", tomute.user.tag)
  .addField("Moderator", message.author.tag)
  .addField("Reason", `${reason ? reason : "None"}`)
  .setTimestamp()
  message.channel.send(`${tomute.user.tag} Has Been unmuted!`)
let channel= message.guild.channels.find(`name`, 'mod-log')
if(!channel) return message.channel.send("I can't find mod-log Channel! Please create one!")
  channel.send(Embed)
    } catch(err) {console.log(`Error with unmute \n${err}`)}

}

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 'Moderators'
}

module.exports.help = {
  name: "unmute",
  category: "Mod",
  description: "Unmute Mentioned user!",
  usage: 'unmute <mention>',
}