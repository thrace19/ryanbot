const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
const send = require('quick.hook')
const currencyFormatter = require('currency-formatter')

exports.run = async (message, client,) => {

  try {
    // let worklog = client.channels.get('464424869497536512') // let's forget about logging....
    let cooldown = 2.88e+7; //8 Hours in ms
    
    let amount = Math.floor((Math.random() * 100) + 100); // Cost
    
    let workplace = ["rock", "gold", "ruby", "diamond", "coal", "sapphire", "dirt", "dust", "nothing"] // oops sorry i was cooking a food...
    
    let workDaily = await db.fetch(`workDaily_${message.author.id}`)
    
    let result = Math.floor((Math.random() * workplace.length))
    
    const rock = 10; // 0
    const gold = 90 // 1
    const ruby = 100; // 2
    const diamond = 140; // 3
    const coal = 50; // 4
    const sapphire = 75; // 5
    const dirt = 5; // 6
    const dust = 2; // 7
    const nothing = 0 // 8
    
    let timeObj = ms(cooldown - (Date.now() - workDaily))

    let workEmbed = new Discord.RichEmbed()
            .setDescription(`**${message.author.tag}** Started mining and mined **${workplace}**`)
            .setColor(`GREEN`)
    
    let dailytEmbed = new Discord.RichEmbed()
    .setDescription(`${message.author.tag} Trying to mine but it's on cooldown! Time Left: **${timeObj.hours}h, ${timeObj.minutes}m, and ${timeObj.seconds}s**`)
    .setColor(`RED`)

    
    try {
    db.fetch(`currency_${message.author.id}`).then(rm => { // MODIFY - This checks your account to see if your account has a valid amount
    if(rm == null || 0){
        db.set(`currency_${message.author.id}`, 50)} // MODIFY - This wipes any data & updates the account if it isn't a valid number

    else if (workDaily !== null && cooldown - (Date.now() - workDaily) > 0) {
        

        let workDailyEmbed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag} || Mining in cooldown!`, message.author.displayAvatarURL)
        .setColor(`BLUE`)
        .setDescription(`**${message.author.tag}**, You've just Mined for 6 hours!\nYou require rest for, **${timeObj.hours}h, ${timeObj.minutes}m**`)
        message.channel.send(workDailyEmbed)
      /*send(worklog, dailytEmbed, {
          name: "Quarry Site Manager",
          icon: "https://t3.ftcdn.net/jpg/01/58/52/04/240_F_158520439_sUPZYOiIgmAO5SvXTWOSw2jIlPiemXTU.jpg"
      }) */
    } else if (`${result}` == "0"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, rock).then(i => { // We need to change `amount` to whatever we display above
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Mined Rock`, message.author.displayAvatarURL)
            .setColor(`ORANGE`)
            .addField(`You've been payed for your mining,`, `The Quarry Site Manager Paid You: ${currencyFormatter.format(rock, { code: 'SEK' })}`) //shrug...
            message.channel.send(dailyEmbed)
            /*send(worklog, dailytEmbed, {
          name: "Quarry Site Manager",
          icon: "https://t3.ftcdn.net/jpg/01/58/52/04/240_F_158520439_sUPZYOiIgmAO5SvXTWOSw2jIlPiemXTU.jpg"
      }) */
        })}
    else if (`${result}` == "1"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, gold).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Gold`, message.author.displayAvatarURL)
            .setColor(`#FFFFCC`)
            .addField(`You've been payed for your mining,`, `The Quarry Site Manager Paid You: ${currencyFormatter.format(gold, { code: 'SEK' })}`)
            message.channel.send(dailyEmbed)
            /*send(worklog, dailytEmbed, {
          name: "Quarry Site Manager",
          icon: "https://t3.ftcdn.net/jpg/01/58/52/04/240_F_158520439_sUPZYOiIgmAO5SvXTWOSw2jIlPiemXTU.jpg"
      }) */
        })}
    else if (`${result}` == "2"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, ruby).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Mined Ruby`, message.author.displayAvatarURL)
            .setColor(`RED`)
            .addField(`You've been payed for your mining,`, `The Quarry Site Manager Paid You: ${currencyFormatter.format(ruby, { code: 'SEK' })}`)
            message.channel.send(dailyEmbed)
            /*send(worklog, dailytEmbed, {
          name: "Quarry Site Manager",
          icon: "https://t3.ftcdn.net/jpg/01/58/52/04/240_F_158520439_sUPZYOiIgmAO5SvXTWOSw2jIlPiemXTU.jpg"
      }) */
        })}
    else if (`${result}` == "3"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, diamond).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Mined diamond`, message.author.displayAvatarURL)
            .setColor(`RED`)
            .addField(`You've been payed for your mining,`, `The Quarry Site Manager Paid You: ${currencyFormatter.format(diamond, { code: 'SEK' })}`)
            message.channel.send(dailyEmbed)
            /*send(worklog, dailytEmbed, {
          name: "Quarry Site Manager",
          icon: "https://t3.ftcdn.net/jpg/01/58/52/04/240_F_158520439_sUPZYOiIgmAO5SvXTWOSw2jIlPiemXTU.jpg"
      }) */
        })}
    else if (`${result}` == "4"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, coal).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Mined coal`, message.author.displayAvatarURL)
            .setColor(`BLACK`)
            .addField(`You've been payed for your mining,`, `The Quarry Site Manager Paid You: ${currencyFormatter.format(coal, { code: 'SEK' })}`)
            message.channel.send(dailyEmbed)
            /*send(worklog, dailytEmbed, {
          name: "Quarry Site Manager",
          icon: "https://t3.ftcdn.net/jpg/01/58/52/04/240_F_158520439_sUPZYOiIgmAO5SvXTWOSw2jIlPiemXTU.jpg"
      }) */
        })}
    else if (`${result}` == "5"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, sapphire).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Mined Sapphire`, message.author.displayAvatarURL)
            .setColor(`AQUA`)
            .addField(`You've been payed for your mining,`, `The Quarry Site Manager Paid You: ${currencyFormatter.format(sapphire, { code: 'SEK' })}`)
            message.channel.send(dailyEmbed)
          /*send(worklog, dailytEmbed, {
          name: "Quarry Site Manager",
          icon: "https://t3.ftcdn.net/jpg/01/58/52/04/240_F_158520439_sUPZYOiIgmAO5SvXTWOSw2jIlPiemXTU.jpg"
      }) */
        })}
          else if (`${result}` == "6"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, dirt).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Mined Dirt`, message.author.displayAvatarURL)
            .setColor(`AQUA`)
            .addField(`You've been payed for your mining,`, `The Quarry Site Manager Paid You: ${currencyFormatter.format(dirt, { code: 'SEK' })}`)
            message.channel.send(dailyEmbed)
          /*send(worklog, dailytEmbed, {
          name: "Quarry Site Manager",
          icon: "https://t3.ftcdn.net/jpg/01/58/52/04/240_F_158520439_sUPZYOiIgmAO5SvXTWOSw2jIlPiemXTU.jpg"
      }) */
        })}
          else if (`${result}` == "7"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, dust).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Mined Dust`, message.author.displayAvatarURL)
            .setColor(`AQUA`)
            .addField(`You've been payed for your mining,`, `The Quarry Site Manager Paid You: ${currencyFormatter.format(dust, { code: 'SEK' })}`)
            message.channel.send(dailyEmbed)
          /*send(worklog, dailytEmbed, {
          name: "Quarry Site Manager",
          icon: "https://t3.ftcdn.net/jpg/01/58/52/04/240_F_158520439_sUPZYOiIgmAO5SvXTWOSw2jIlPiemXTU.jpg"
      }) */
        })}
          else if (`${result}` == "8"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, nothing).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Mined Nothing`, message.author.displayAvatarURL)
            .setColor(`AQUA`)
            .addField(`You've been denied payment for mining,`, `The Quarry Site Manager Shunned You..`)
            message.channel.send(dailyEmbed)
          /*send(worklog, dailytEmbed, {
          name: "Quarry Site Manager",
          icon: "https://t3.ftcdn.net/jpg/01/58/52/04/240_F_158520439_sUPZYOiIgmAO5SvXTWOSw2jIlPiemXTU.jpg"
      }) */
        })}
    else {
        message.channel.send(`Oof.. you've hit a massive error. Please send a report in, \`-!support <work> <error>\``)
        console.log(result)
    }
    })} catch(err) {console.log(err)}
    } catch(err) {console.log(`Error with work \n${err}`)}
}


module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Admins"
}

module.exports.help = {
  name: "mine",
  category: 'Economy',
  description: 'Description coming soon!',
  usage: 'mine',
}