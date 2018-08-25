const Discord = require('discord.js')
const db = require(`quick.db`)
const send = require('quick.hook')

exports.run = (client, message, args) => {
 try {
   const baluser = message.mentions.users.first()
   if(!baluser) return message.channel.send(`Please define a user to set their balance!`, {code: "js"})
   const amount = args.join(' ').slice(22)
   if(!amount) return message.channel.send(`Please set a amount to set user balance!`)
   if(!Number(amount)) return
   if(isNaN(amount)) return
   db.set(`Currency_${baluser.id}`, parseInt(amount)).then(message.channel.send(`Successfull added ${amount} KR to ${baluser} bank!`))
 } catch(err) {
         const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
                  const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on bank Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,   
  aliases: [],
  permLevel: "Bot Admins"
};

exports.help = {
  name: "setbalance",
  category: "Util",
  description: "Add kr into user account",
  usage: "setbalance <user> <amount>"
};