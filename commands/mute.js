const Discord = require("discord.js");
const ms = require("ms");
const send = require(`quick.hook`)
module.exports.run = async (bot, message, args) => {
  try {
          const settings = message.settings = bot.getGuildSettings(message.guild);
        var modLog = settings.modlogChannel
        var mutedRole = settings.mutedRole
  
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You need `MANAGE_ROLES` Permission to do this!");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(tomute === message.guild.member(message.author)) return message.channel.send("You Can't Mute yourself!")
  if(!tomute) return message.channel.send("Couldn't find user.");
  let muterole = message.guild.roles.find(`name`, `${mutedRole}`);

let reason = args.join(" ").slice(22)
  await(tomute.addRole(muterole.id));
  let muteEmbed = new Discord.RichEmbed()
  .setColor("#fc6400")
  .addField("User", tomute, true)
  .addField("Moderator", message.author, true)
  .addField("Reason", reason || `Muted by ${message.author}: No reason..`)
  .setThumbnail(tomute.user.displayAvatarURL)
  .setTimestamp();
    let successemb = new Discord.RichEmbed()
    .setDescription(`${tomute} has been muted by ${message.author}. \nReason: \n**${reason || 'No reason...'}**`)
    .setColor(`RED`)
 message.channel.send(successemb)
let channel= message.guild.channels.find(`name`, `${modLog}`)
if(!channel) return message.channel.send("Can't find mod-log Channel! Please Create one!")
      send(channel, muteEmbed, {
     name: 'Action - Mute',
      icon: 'https://cdn3.iconfinder.com/data/icons/chat-sign/50/7-512.png'
    })
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
                  const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on mute Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
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
  usage: 'mute <mention> [reason]',
}