const Discord = require("discord.js");
const cooldown = new Set();
module.exports.run = async (bot, message, args) => {
  try {

      if (cooldown.has(message.author.id && message.guild.id)) {
        return message.reply('Too fast right there! you need to wait 10 **Seconds** Before using this commands again!');
    }
    cooldown.add(message.author.id && message.guild.id);

    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 10000);
  
  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter(`Server Created • ${day}/${month}/${year}`)
   .setColor("#7289DA")
   .setThumbnail(sicon)
   .addField("ID", message.guild.id, true)
   .addField("Name", message.guild.name, true)
   .addField("Owner", message.guild.owner.user.tag, true)
   .addField("Region", message.guild.region, true)
   .addField("Channels", message.guild.channels.size, true)
   .addField("Members", message.guild.memberCount, true)
   .addField("Humans", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Online", online.size, true)
   .addField("Guild Verify level", message.guild.verificationLevel, true)
  //.addField("Server Roles", message.guild.roles.map(roles => roles).join(' '), true)
  //.addField("Your Roles", message.member.roles.map(roles => roles).join(' > '),true)
   
   message.channel.send(serverembed);
    } catch(err) {console.log(`Error with serverinfo \n${err}`)}

}
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