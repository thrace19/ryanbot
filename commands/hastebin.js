const hastebin = require('hastebin-gen');
const Discord = require('discord.js')
exports.run = (client, message, args, tools) => {
  try {
	message.delete()
  hastebin(args.join(' '), "js").then(r => {
      var hastLink = r
      const hastEmb = new Discord.RichEmbed()
      .setColor(0xFFF000)

      .setURL(hastLink)
      .addField('Your Hastebin Link: ', `${hastLink}`)
       message.channel.send({embed: hastEmb})
  }).catch(console.error);  
    } catch(err) {console.log(`Error with hastebin \n${err}`)}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: "hb",
  category: 'Util',
  description: 'Upload your text into hastebin',
  usage: "hb <text>"
}