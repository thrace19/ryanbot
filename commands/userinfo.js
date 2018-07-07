const discord = require("discord.js")
const moment = require("moment")
const cooldown = new Set();
exports.run = (client, message, params) => {
  try {
      if (cooldown.has(message.author.id && message.guild.id)) {
        return message.reply('Too fast right there! you need to wait 5 **Seconds** before using this commands again!');
    }
    cooldown.add(message.author.id && message.guild.id);

    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 5000);
  
	let user = message.mentions.users.first() || message.author;
	let embed = new discord.RichEmbed()
	.setAuthor(`${user.username} Information`)
	.setThumbnail(user.displayAvatarURL)
	.setColor('RANDOM')
  .setDescription(`**Full Username**: ${user.username}\n**User ID**: ${user.id}\n**Bot**: ${user.bot}\n**User Tag**: ${user.tag}\n**User Status**: ${user.presence.status}\n**User Game**: ${user.presence.game ? user.presence.game.name : 'None'}\n**Registered on Discord**: \n${user.createdAt}`)

	.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
	.setTimestamp()

	message.channel.send(embed);
    } catch(err) {console.log(`Error with userinfo \n${err}`)}
}

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
