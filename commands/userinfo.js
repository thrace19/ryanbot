const discord = require("discord.js")
const moment = require("moment")
const cooldown = new Set();
const config = require(`../config.js`)

exports.run = (client, message, params) => {
  try {
  if (cooldown.has(message.author.id)) {
    let cooldownemb = new discord.RichEmbed()
    .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
    .setDescription(`You need to wait 5 Seconds!`)
    .setColor(`RED`)
    .setFooter(`This message will be deleted in 5 seconds..`)
    return message.channel.send(cooldownemb).then(msg => {
     msg.delete(5000) 
    })
    
    }
    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 5000);
	let user = message.mentions.users.first() || message.author;
	let embed = new discord.RichEmbed()
	.setAuthor(`${user.username} Information`)
	.setThumbnail(user.displayAvatarURL)
	.setColor('RANDOM')
  .setDescription(`**Full Username**: ${user.username}\n**User ID**: ${user.id}\n**Bot**: ${user.bot}\n**User Tag**: ${user.tag}\n**User Status**: ${user.presence.status}\n**User Game**: ${user.presence.game ? user.presence.game.name : 'None'}\n**Registered on Discord**: \n${user.createdAt}`)
  //.addField("Roles", message.user.roles.map(roles => roles).join(' '),true)
	.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
	.setTimestamp()

	message.channel.send(embed);
    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on userinfo commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: 'userinfo',
  category: 'util',
  description: 'Check info of mentioned user!',
  usage: 'userinfo [mention]'
};
