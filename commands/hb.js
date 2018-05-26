const hastebin = require('hastebin-gen');
const Discord = require('discord.js')
exports.run = (client, message, args, tools) => {
	message.delete()
  hastebin(args.join(' '), "js").then(r => {
      var hastLink = r
      const hastEmb = new Discord.RichEmbed()
      .setColor(0xFFF000)

      .setURL(hastLink)
      .addField('Your Hastebin Link: ', `${hastLink}`)
       message.channel.send({embed: hastEmb})
  }).catch(console.error);  
}

exports.help = {
  name: "hb",
  usage: "hb <text>"
}