const Discord = require('discord.js');
const fetch = require('snekfetch');
const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20B046, 0xF2E807, 0xF207D1, 0xEE8419];
const cooldown = new Set();
exports.run = (client, message, args) => {
  try {
  if (cooldown.has(message.author.id)) {
    let cooldownemb = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
    .setDescription(`You need to wait 10 Seconds!`)
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
    if (!args) {
        return message.channel.send({
          embed: {
            color: "RED",
            title: "Please input a word!",
            description: "I can't find that word"
    }})}
    fetch.get('http://api.urbandictionary.com/v0/define?term=' + args).then(res => {
        if (res.body.list[0] === undefined) {
            return message.reply('Couldnt find the word');
        }
        const definition = res.body.list[0].definition;
        const word = res.body.list[0].word;
        const Author = res.body.list[0].author;
        const exam = res.body.list[0].example;
        const thumup = res.body.list[0].thumbs_up;
        const thumdown = res.body.list[0].thumbs_down;
      const image = res.body.list[0].image;
      const permalink = res.body.list[0].permalink;
        const embed = new Discord.RichEmbed()
        .setDescription(`Information for [${word}](${permalink})`)
    .setColor(hexcols[~~(Math.random() * hexcols.length)])
        .addField(`__**Definition**__:`, `${definition}`)
    .addField('Author:', `${Author}`)
    .addField('Example:', `${exam}`)
        .setFooter(`👍 ${thumup} | 👎 ${thumdown}`)
        message.channel.send({embed}).catch(e => client.logger.error(e));
    }).catch(err => {
        if (err) {
            console.log(err);
        }
    });
    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
            const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on urbansearch Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["us"],
  permLevel: "Users"
}

exports.help = {
  name: 'urbansearch',
  category: 'unknown',
  description: 'Urban Search',
  usage: 'urbansearch <name>',
}