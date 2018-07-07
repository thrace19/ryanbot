const Discord = require("discord.js");
const errors = require("../util/errors.js");
const send = require('quick.hook')

module.exports.run = async (bot, message, args) => {
  try {
  const cnl = bot.channels.get('459326999345758209');
  let guild = message.guild;
    message.delete();
    if(args[0] == "14252152"){
      message.reply("5125215623");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return errors.cantfindUser(message.channel);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor('RANDOM')
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
    reportschannel.send(reportEmbed)
  
  let sicon = message.guild.iconURL;
  let communityembed = new Discord.RichEmbed()
  .setAuthor(message.guild.name, sicon)
  .setColor('RANDOM')
  .addField("Reported User Name:", `${rUser} ID: ${rUser.id}`)
  .addField('Reported By', `${message.author} ID: ${message.author.id}`)
  .addField("Reason:", rreason)
  .addField('Server Name:', `${guild.name}`)
  .addField('Incident Time:', message.createdAt);
    send(cnl, communityembed, {
        name: `Report`,
        icon: `https://cdn.discordapp.com/attachments/421620705570979843/462632872616919053/R-logo512.png`
    })
  
} catch(err) {console.log(`Error with report \n${err}`)}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
}

exports.help = {
  name: 'report',
  category: 'UTIL',
  description: 'Report mentioned user',
  usage: 'report <mention> <reason>'
}