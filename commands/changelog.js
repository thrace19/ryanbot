const Discord = require('discord.js')
const  db = require('quick.db')
const  ms = require('parse-ms');

let botversion = ('v10.6')

// parseTime function
function parseTime(milliseconds) {

  // Declare Variables
  let string = '',
    obj = ms(Date.now() - milliseconds);

  // Check Days
  if (obj.days === 1) string += ` ${obj.days} day `
  else if (obj.days > 1) string += ` ${obj.days} days `

  // Check Hours
  if (obj.hours === 1) string += `${obj.hours} hour `
  else if (obj.hours > 1) string += `${obj.hours} hours `

  // Check Minutes
  if (obj.minutes === 1) string += `${obj.minutes} minute `
  else if (obj.minutes > 1) string += `${obj.minutes} minutes `

  // Append Text
  if (string === '') string = 'Just now'
  else string += 'ago'

  return string;

}

exports.run = async (client, message, args, tools) => {
  try {

  // Fetch Changelog Entries
  let entries = await db.fetch('changelogs');

  // Create Embed
  const embed = new Discord.RichEmbed()
    .setColor(0xffffff)

  // If none found, return
  if (entries === null) {
    let erroremb = new Discord.RichEmbed()
    .setFooter('No entries found!');
    return message.channel.send(erroremb);
  }

  // Only display 25 most recent entries
  if (entries instanceof Array) entries = entries.slice(-10);

  // Compile
  let changelog = '';
  for (var i in entries.reverse()) {
    changelog += `**${entries[i].entry}**\n`
  }

  // Configure Embed
  let changelogemb = new Discord.RichEmbed()
  .setAuthor(`${client.user.username} Changelog`, client.user.displayAvatarURL)
  .setTitle(`Changelog amount: ${entries.length}`)
    .setDescription(changelog)
  .setThumbnail(client.user.displayAvatarURL)
  .setFooter(`Bot Version: ${botversion}`)
  .setTimestamp()

  // Send Embed
  message.channel.send(changelogemb)
    } catch(err) {console.log(`Error with changelog \n${err}`)}

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["cl", "ch"],
  permLevel: "Users"
};

exports.help = {
  name: 'changelog',
  category: 'Util',
  description: 'Check the bot changelogs',
  usage: 'changelogs'
};