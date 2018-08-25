const discord = require('discord.js')
const db = require('quick.db')
    var currencyFormatter = require('currency-formatter')
    var ms = require('parse-ms');

module.exports.run= async (client, message, args) => {
  try {
  let worklog = client.channels.get('463637802026795010')
     let cooldown = 8.64e+7;
    let amount = Math.floor((Math.random() * 300) + 100);
  let workplace = ["Office", "Bank", "Restaurant", "Market"]
  let workresult = Math.floor((Math.random() * workplace.length))

    let workDaily = await db.fetch(`workDaily_${message.author.id}`)
    try {
    db.fetch(`Currency_${message.member.id}`).then(rm => {
    if(rm == null || 0){
        message.channel.send(`Cannot find this name on database! please register it by executing **.bank**`)}

    else if (workDaily !== null && cooldown - (Date.now() - workDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - workDaily))

        let workDailyEmbed = new discord.RichEmbed()
        .setAuthor(`${message.author.tag} || Work in cooldown!`, message.author.displayAvatarURL)
        .setColor(`RANDOM`)
        .setDescription(`**${message.author.tag}**. Daily work reset in **${timeObj.hours}h, ${timeObj.minutes}m, and ${timeObj.seconds}s**!`)
        message.channel.send(workDailyEmbed)
      worklog.send(`**${message.author.tag}** Trying to work but it's on cooldown! Time Left: **${timeObj.hours}h, ${timeObj.minutes}m, and ${timeObj.seconds}s**`)
    } else {
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`Currency_${message.member.id}`, amount).then(i => {
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Working at ${workplace[workresult]}`, message.author.displayAvatarURL)
            .setColor(`RANDOM`)
            .addField(`You have been payed for working `, `${currencyFormatter.format(amount, { code: 'SEK' })}`)
            message.channel.send(dailyEmbed)
          worklog.send(`**${message.author.tag}** Started working and get payed ${currencyFormatter.format(amount, { code: 'SEK' })}`)
        })}
    })} catch(err) {console.log(err)}
    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      const erroremb = new discord.RichEmbed()
      .setTitle(`Error on work Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Owners"
};

exports.help = {
	name: "work",
  category: "Economy",
  description: "get a work on random place and get payed out.",
  usage: "work"
}