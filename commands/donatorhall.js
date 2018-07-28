const Discord = require('discord.js')

exports.run = (client, message, args) => {
  try {
 let hallembed = new Discord.RichEmbed()
 .setTitle('Donator Hall')
 .setDescription(`**Seems like there isn't anyone in this hall yet! Become one by [donating](https://www.patreon.com/RyanBot)**`)
 .setColor(`GREEN`)
 
 message.channel.send(hallembed)
        } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on donatorhall commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: "donator",
  category: "Donation",
  description: "See the top donator for the bot",
  usage: "donator"
};