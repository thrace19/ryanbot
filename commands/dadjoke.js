const sa = require('superagent')
const Discord = require('discord.js')
const cooldown = new Set()
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
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
  let {body} = await sa
  .get(`https://icanhazdadjoke.com/slack`);
  let embed = new Discord.RichEmbed()
  .setDescription(`**${body.attachments.map(a => a.text)}**`)
  .setColor('RANDOM')
  message.channel.send(embed)
    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
                  const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on dadjoke Commands`)
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
  name: "dadjoke",
  category: "Fun",
  description: "it tells you dad joke",
  usage: "dadjoke"
};