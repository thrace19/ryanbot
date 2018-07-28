module.exports.run = async (bot, message, args) => {
  try {

    var discord = require('discord.js');
    var currencyFormatter = require('currency-formatter')
    var db = require('quick.db')
    var ms = require('parse-ms');
  
    
    let amount = Math.floor((Math.random() * 1000) + 500);

    let ownerdaily = await db.fetch(`ownerdaily_${message.author.id}`)
        db.set(`ownerdaily_${message.author.id}`, Date.now());
        db.add(`Currency_${message.member.id}`, amount).then(i => {
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} || Success!`, message.author.displayAvatarURL)
            .setColor(`RANDOM`)
            .addField(`Daily claimed :`, `${currencyFormatter.format(amount, { code: 'SEK' })}`)
            message.channel.send(dailyEmbed)
        })
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on ownerdaily commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Owners"
};

exports.help = {
  name: 'ownerdaily',
  category: 'Fun',
  description: 'Claim your daily KR',
  usage: 'acc'
};