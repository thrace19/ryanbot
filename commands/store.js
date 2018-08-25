module.exports.run = async (bot, message, args) => {
  try {

      const settings = message.settings = bot.getGuildSettings(message.guild);
  var prefix = settings.prefix
 var discord = require('discord.js');
 var currencyFormatter = require('currency-formatter')
 var db = require('quick.db');
  
  db.delete('store1')
  
  let Badge = { name: 'Badge', ID: 1, description: 'Get some awesome badge', price: '100'}; //When increasing this just make ID:2, 3 & etc. Description can be the same & name.
  let Pickaxe = { name: 'Pickaxe', ID: 2, description: 'Useful for mining', price: '550'};
  
  db.push('store1', Badge) // Always make sure whatever item your pushing (let badge) to always be the let {blank}
  db.push('store1', Pickaxe)
    
      db.fetch('store1').then(i => {
        let storeEmbed = new discord.RichEmbed()
        .setAuthor(`Welcome to store ${message.author.tag}`)
        .setColor(`RANDOM`)
        .setDescription(`If you like to buy store below use **${prefix}buy <item> <amount>**`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/463565370255736832/472737438356471818/images.png`)
        .addField(`${i[0].name}`, `${i[0].description}\nPrice: ${currencyFormatter.format(i[0].price, { code: 'SEK' })}`)
        .addField(`${i[1].name}`, `${i[1].description}\nPrice: ${currencyFormatter.format(i[1].price, { code: 'SEK' })}`)
        message.channel.send(storeEmbed)
    })
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
            const erroremb = new discord.RichEmbed()
      .setTitle(`Error on store Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sr', 'shop'],
  permLevel: "Bot Owners"
};

exports.help = {
  name: 'store',
  category: 'Fun',
  description: 'View RyanBot Store',
  usage: 'acc'
};