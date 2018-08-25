const Discord = require('discord.js')
const cooldown = new Set()

module.exports.run = async (client, message, args) => {

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
      
        let emojis;
        if (message.guild.emojis.size === 0) emojis = 'There are no emojis on this server.';
        let emojisemb = new Discord.RichEmbed()
        .setTitle(`${message.guild.name} Emojis`)
        .setDescription(`${message.guild.emojis.map(e => e).join(' ')}`)
        message.channel.send(emojisemb);

    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
                  const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on emojis Commands`)
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
  name: "emojis",
  category: "Util",
  description: "Check server emojis",
  usage: "emojis"
};
