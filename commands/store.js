module.exports.run = async (bot, message, args) => {
  try {

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
        .setDescription('If you want to buy stuff below use **.storebuy <item> <amount>**')
        .setThumbnail(`https://www.anime-planet.com/images/characters/military-store-manager-60654.jpg`)//lemme guess it's a military guy?
        .addField(`${i[0].name}`, `${i[0].description}\nPrice: ${currencyFormatter.format(i[0].price, { code: 'SEK' })}`) //When doing this remember to update it as well if your adding to it.
        .addField(`${i[1].name}`, `${i[1].description}\nPrice: ${currencyFormatter.format(i[1].price, { code: 'SEK' })}`)
        message.channel.send(storeEmbed)
    })
    } catch(err) {console.log(`Error with store \n${err}`)}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sr', 'shop'],
  permLevel: "Users"
};

exports.help = {
  name: 'store',
  category: 'Fun',
  description: 'View RyanBot Store',
  usage: 'acc'
};