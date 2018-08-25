const Discord = require("discord.js");
const send = require(`quick.hook`)

module.exports.run = async (bot, message, args) => {
  try {
    
              const settings = message.settings = bot.getGuildSettings(message.guild);
        var modlog = settings.modlogChannel
        var mutedrole = settings.mutedRole
        var prefix = settings.prefix
  
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You need `MANAGE_ROLES` Permission to do this!");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  let muterole = message.guild.roles.find(`name`, `${mutedrole}`);
  
  if(!muterole) return message.channel.send(`I can't find a muted role Please Create one! or assign it by using **${prefix}set edit mutedRole <role>**`)
  

  await(tomute.removeRole(muterole.id));
  let reason = args.join(" ").slice(22)
    let Embed = new Discord.RichEmbed()
  .setColor("#fc6400")
  .addField("User", tomute.user, true)
  .addField("Moderator", message.author, true)
  .addField("Reason", `${reason ? reason : "None"}`, true)
    .setThumbnail(tomute.user.displayAvatarURL)
  .setTimestamp()
    let unmute = new Discord.RichEmbed()
    .setDescription(`${tomute} has been unmuted!`)
    .setColor(`GREEN`)
  message.channel.send(unmute)
    message.channel.send(`${tomute}`).then(message => {
      message.delete()
    })
let channel= message.guild.channels.find(`name`, `${modlog}`)
if(!channel) return message.channel.send("I can't find mod-log Channel! Please create one!")
        send(channel, Embed, {
     name: 'Action - Unmute',
      icon: 'https://cdn3.iconfinder.com/data/icons/chat-sign/50/7-512.png'
    })
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
            const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on unmute Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
};

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