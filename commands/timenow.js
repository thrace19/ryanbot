const Discord = require('discord.js')
exports.run = (client, message, args) => {
  try {
var today = new Date()
let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
const embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
.addField("Today is", `\`${Day}\` ,\`${Month}\` ,\`${Year}\`\n\`Time of day:\` \`${today.toString().split(" ")[4]}\``)
message.channel.send({ embed })
    message.react("🕰")   
    } catch(err) {console.log(`Error with timenow \n${err}`)}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Users"
}

exports.help = {
  name: 'timenow',
  category: 'util',
  description: 'Check time',
  usage: 'timenow'
}
  