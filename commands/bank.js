const Discord = require('discord.js')
const db = require('quick.db')
const timestamp = require('console-timestamp');
const currencyFormatter = require('currency-formatter')
const send = require('quick.hook')
const cooldown = new Set();

exports.run = (client, message, args) => {
  try {
    
      if (cooldown.has(message.author.id)) {
    let cooldownemb = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
    .setDescription(`You need to wait 10 seconds!`)
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
    
    let user = message.mentions.users.first() || message.author;
  const newaccount = client.channels.get(`463566107022983169`)
  const error = client.channels.get(`463578170034094080`)
  db.fetch(`Currency_${user.id}`).then(rm => {
  var timestamp = require('console-timestamp');
    let rmembed = new Discord.RichEmbed()
    .setAuthor(`SuperVisor Bank`)
    .setColor(`GREEN`)
    .setDescription(`Money amount for <@${user.id}>`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/436914201462702090/463569867916836864/unknown.png`)
    .addField(`Money amount`, `${currencyFormatter.format(rm, { code: 'SEK' })}`, true)
    .addField(`Account Holder`, `<@${user.id}>`, true)
    if(rm == null) {
      db.set(`Currency_${user.id}`, 200), message.channel.send(`Creating new account for <@${message.author.id}>`)
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
    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on bank commands!\n\nError:\n\n ${err}`)
    }
};

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