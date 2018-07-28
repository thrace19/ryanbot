const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) => {
  try {
  db.fetch(`items_${message.member.id}_badge`).then(item1 => {
  db.fetch(`items_${message.member.id}_pickaxe`).then(item2 => {
  db.fetch(`items_${message.member.id}_replace`).then(item3 => {
  db.fetch(`items_${message.member.id}_replace`).then(item4 => {
  db.fetch(`items_${message.member.id}_replace`).then(item5 => {
  db.fetch(`items_${message.member.id}_replace`).then(item6 => {
    var db = require('quick.db')
    let invEmbed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag} Inventory`, message.author.displayAvatarURL)
    .setThumbnail(message.author.displayAvatarURL)
    .setTitle(`${message.author.username} Inventory`)
    .addField(`Badge`, `${item1}x`, true)
    .addField(`Pickaxe`, `${item2}x`, true)
    //.addField(`Badge`, item3, true)
    //.addField(`Badge`, item4, true)
    //.addField(`Badge`, item5, true)
    //.addField(`Badge`, item6, true)
    .setFooter(`Here's your inventory`)
    message.channel.send(invEmbed)
  })})})})})})
        } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on inventory commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['inv'],
  permLevel: 'Bot Admins'
}

exports.help = {
  name: 'inventory',
  category: 'Economy',
  description: 'Check your inventory',
  usage: 'inventory'
}