const Discord = require('discord.js');
const cooldown = new Set()

exports.run = (client, message, args, tools) => {
  try {

          if (cooldown.has(message.author.id)) {
    let cooldownemb = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
    .setDescription(`You need to wait 10 seconds!`)
    .setColor(`RED`)
    .setFooter(`This message will be deleted in 10 seconds..`)
    return message.channel.send(cooldownemb).then(msg => {
     msg.delete(10000) 
    })
    
    }
    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
    
    let user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${user.username} Avatar`)
        .setImage(user.displayAvatarURL)
        .setTimestamp()
        
    message.channel.send(embed)
  } catch(err) {console.log(`Error with avatar \n${err}`)}
    
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
	name: 'avatar',
  category: 'Util',
  description: 'Show mentioned user avatar',
	usage: 'avatar <user>'
}