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
    let emojic = message.guild.emojis.size
      let channels = message.guild.channels.size;
  let textChannels = message.guild.channels.filter(m => m.type == "text").size;
  let voiceChannels = message.guild.channels.filter(i => i.type == "voice").size;
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
   .addField(`Channels(${message.guild.channels.size})`, `**${textChannels}** Text\n**${voiceChannels}** Voice`, true)
   .addField(`Role(s)`, message.guild.roles.size, true)
   .addField(`Emoji(s)`, message.guild.emojis.size, true)
   .addField("Users Status", `<a:online:469544869363318785>**${online.size}** Online\n<a:idle:469544895611404298>**${idle.size}** Idle\n<a:donotdisturb:469544909800734721>**${dnd.size}** Do not disturb\n<a:offline:469544879547088897>**${offline.size}** Offline`, true)
  //.addField("Server Roles", message.guild.roles.map(roles => roles).join(' '), true)
  //.addField("Your Roles", message.member.roles.map(roles => roles).join(' > '),true)
   
   message.channel.send(serverembed);
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
            const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on serverinfo Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
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