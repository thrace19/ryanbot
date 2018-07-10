const Discord = require('discord.js')
exports.run = (client, message) => {
  try {
  let inviteembed = new Discord.RichEmbed()
  .setAuthor(`RyanBot useful links`, client.user.displayAvatarURL)
  .setColor('#0ae01a')
  .setDescription('Invite the bot to your server! [Invite the bot](https://discordapp.com/api/oauth2/authorize?client_id=450233057908097024&permissions=8&scope=bot)\nJoin Support server if you need help with the bot! [Support Server](https://discord.gg/FTmxve7)\nCheck the bot [commands list](https://ryanbotc.glitch.me/)')
  .setFooter(`Requested by ${message.author.tag}`)
  message.channel.send(inviteembed)
    } catch(err) {console.log(`Error with invite \n${err}`)}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 'Users'
}

exports.help = {
  name: 'invite',
  category: 'Util',
  description: 'Get the bot invite link',
  usage: 'invite'
}