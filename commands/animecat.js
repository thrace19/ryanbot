const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    superagent.get('https://nekos.life/api/v2/img/neko')
        .end((err, response) => {
      const catembed = new Discord.RichEmbed()
      .setTitle(`Here your neko!`)
      .setImage(response.body.url)
      .setColor(`RANDOM`)
  message.channel.send(catembed);
    })
    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
                  const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on cat Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
	name: "neko",
  category: "Fun",
  description: "Generate Random Neko",
  usage: "neko"
}