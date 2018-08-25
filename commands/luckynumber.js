const Discord = require('discord.js')
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
  var LuckNumber = Math.floor((Math.random() * 12000) + 0.120);
  const numEmb = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setAuthor(`Lucky Number for ${user.username}`, user.displayAvatarURL )
  .addField(`${user.username} Lucky number:`, `${LuckNumber}!`);
  message.channel.send(numEmb)

    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
                  const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on luckynumber Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ln", "lucknumber"],
  permLevel: "Users"
};

exports.help = {
  name: "luckynumber",
  category: "Fun",
  description: "Generate a Lucky Number for yourself.",
  usage: "luckynumber"
};