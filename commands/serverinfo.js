const Discord = require("discord.js");
const cooldown = new Set();
module.exports.run = async (bot, message, args) => {
  try {
  if (cooldown.has(message.author.id)) {
    let cooldownemb = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
    .setDescription(`You need to wait 10 Seconds!`)
    .setColor(`RED`)
    .setFooter(`This message will be deleted in 10 seconds..`)
    return message.channel.send(cooldownemb).then(msg => {
     msg.delete(10000) 
    })
    
    }
    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
  
  let online = message.guild.members.filter(member => member.user.presence.status === 'online');
    let idle = message.guild.members.filter(member => member.user.presence.status === 'idle');
    let dnd = message.guild.members.filter(member => member.user.presence.status === 'dnd');
    let offline = message.guild.members.filter(member => member.user.presence.status === 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, message.guild.iconURL)
   .setFooter(`Server Created • ${day}/${month}/${year}`)
   .setColor("#7289DA")
   .setThumbnail(message.guild.iconURL)
   .addField("Name", message.guild.name, true)
   .addField("ID", message.guild.id, true)
   .addField("Owner", `<@${message.guild.owner.user.id}>`, true)
   .addField("Region", message.guild.region, true)
   .addField("Members", `**${message.guild.memberCount}** Users\n**${message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size}** Humans\n**${message.guild.members.filter(m => m.user.bot).size}** Bots`, true)
   .addField("Users", `**${online.size}** Online\n**${idle.size}** Idle\n**${dnd.size}** Do not disturb\n**${offline.size}** Offline`, true)
   .addField("Guild Verify level", message.guild.verificationLevel, true)
   .addField(`Channels Sizes`, message.guild.channels.size, true)
  //.addField("Server Roles", message.guild.roles.map(roles => roles).join(' '), true)
  //.addField("Your Roles", message.member.roles.map(roles => roles).join(' > '),true)
   
   message.channel.send(serverembed);
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on serverinfo commands!\n\nError:\n\n ${err}`)
    }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: 'serverinfo',
  category: 'Util',
  description: 'Show server info about this server',
  usage: 'serverinfo'
};