const Discord = require('discord.js');
const moment = require('moment');
const cooldown = new Set();
const send = require('quick.hook')

exports.run = (client, message) => {
  try {
    let args = message.content.split(' ').slice(1).join(' ');
    message.delete();

  if (cooldown.has(message.author.id)) {
    let cooldownemb = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
    .setDescription(`You need to wait 5 minutes!`)
    .setColor(`RED`)
    .setFooter(`This message will be deleted in 5 minutes..`)
    return message.channel.send(cooldownemb).then(msg => {
     msg.delete(300000) 
    })
    
    }
    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 300000);
    let guild = message.guild;
    const cnl = client.channels.get('459302740351385600');
    message.reply('Thx for submitting suggestion! Your suggestion is now on process.');
    const embed = new Discord.RichEmbed()
  .setAuthor(`Suggestion from ${message.author.tag}`, message.author.displayAvatarURL)
  .addField('Suggestion:', `**Suggester's Author:** ${message.author.tag}\n**Server:** ${guild.name}\n**Full suggestion:** ${args}`)
  .setThumbnail(message.author.displayAvatarURL)
  .setColor(16711728)
  .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
  send(cnl, embed, {
        name: `Bot Suggestion`,
        icon: `https://cdn.discordapp.com/attachments/421620705570979843/462632872616919053/R-logo512.png`
  })
  .catch(e => client.logger.error(e))
// In your command
    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
            const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on suggest Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: 'suggest',
  category: "Util",
  description: 'Suggest something for the bot',
  usage: 'suggest <text>'
};