const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {

randomPuppy('memes')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setTimestamp()
            .setImage(url)
            .setColor('RANDOM')
        message.channel.send(embed);
    });
    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on meme commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["meme", "memezzzzz"],
  permLevel: "Users"
};

exports.help = {
  name: "meme",
  category: "Fun",
  description: "Memezzzz 4 life",
  usage: "meme"
};