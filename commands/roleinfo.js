const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client, message, args) => {
  try {
    const settings = message.settings = client.getGuildSettings(message.guild);
  var prefix = settings.prefix
  var rol = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find("name", `${rol}`)
  var hata = new Discord.RichEmbed()
  .setColor(10038562)
  .setDescription(`Please input a valid role! \n\n__**EXAMPLE**__:\n${prefix}roleinfo Admin`);
  if(!role) return message.channel.send(hata);
  var moment = require("moment");
  var temps = moment(message.createdTimestamp).format("LLLL");
  var roleinfoEmbed = new Discord.RichEmbed()
  .setColor(role.hexColor)
  .addField('Role Name', role.name, true)
  .addField('Role ID', role.id, true)
  .addField('Users in role', role.members.size, true)
  .addField('Role color', role.hexColor, true)
  .addField('Mentionable?', role.mentionable ? '\nYes' : 'No', true)
  .addField('Role Created At', moment(role.createdAt).format("LL"), true)
  .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL);
  message.channel.send(roleinfoEmbed)
} catch(err) {
  message.channel.send(`**${err}**\n\nThose error above has been reported to our support center`)
  const errorlogs = client.channels.get('464424869497536512')
      const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on roleinfo Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
}
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rinfo'],
  permLevel: 'Users'
};

exports.help = {
  name: 'roleinfo',
  category: 'UTIL',
  description: 'Show information for a role',
  usage: 'roleinfo <rolename>'
};