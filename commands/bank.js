const Discord = require('discord.js')
const db = require('quick.db')
const timestamp = require('console-timestamp');
const currencyFormatter = require('currency-formatter')
const send = require('quick.hook')
exports.run = (client, message, args) => {
  try {
  const newaccount = client.channels.get(`463566107022983169`)
  const error = client.channels.get(`463578170034094080`)
  db.fetch(`Currency_${message.member.id}`).then(rm => {
  var db = require('quick.db')
  var Discord = require('discord.js')
  var timestamp = require('console-timestamp');
    let rmembed = new Discord.RichEmbed()
    .setAuthor(`Welcome to Supervisor Bank ${message.author.username}`, message.author.displayAvatarURL)
    .setDescription(`here you can see how much money you have`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/436914201462702090/463569867916836864/unknown.png`)
    .addField(`Your Money amount`, `${currencyFormatter.format(rm, { code: 'SEK' })}`, true)
    .addField(`Account Holder`, `<@${message.author.id}>`, true)
    if(rm == null) {
      db.set(`Currency_${message.member.id}`, 200), newaccount.send(`Creating new account for <@${message.author.id}> AKA **${message.author.tag}**`)
      message.channel.send(`Creating new account for <@${message.author.id}>`)
      return message.channel.send(rmembed)
    } else {
      if(rm == Number) return error.send(`${message.author.tag} having issue with economy`)
      let formatMoney
      
    rm.toString()
        send(message.channel, rmembed, {
        name: `Supervisor Bank`,
        icon: `https://cdn.discordapp.com/attachments/436914201462702090/463569867916836864/unknown.png`
        })
     }})
  } catch(err) {console.log(`Error with account \n${err}`)}

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['acc', 'bank'], //let u fiddle with this later XD
  permLevel: "Users"
};

exports.help = {
  name: 'bank',
  category: 'Fun',
  description: 'See the KR amount you have',
  usage: 'bank'
};