const settings = require('../settings.json');
const Discord = require("discord.js")

module.exports.run = (client, message) => {
  const helpEmb = new Discord.RichEmbed()
  .setTitle("40 Commands")
  .addField("Categories", "Here Some categories!")
  .setColor("RANDOM")
  .addField("Moderation", "`.mod`")
  .addField("Fun", "`.fun`")
  .addField("Developers", "`.dev`")
  .addField("Utility", "`.util`")
  .addField("Music", "`.music`")
  
  .setFooter("If you found a bug please report it using .bugreport")

  message.channel.send(helpEmb)
}


exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};
