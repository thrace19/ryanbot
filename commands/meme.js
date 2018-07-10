const Discord = require("discord.js");
const client = new Discord.Client();
const meme = require('memejs');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
  meme(function(data) {
  const embed = new Discord.RichEmbed()
  .setTitle(data.title[0])
  .setColor("RANDOM")
  .setImage(data.url[0])
  message.channel.send({embed});
  })
    } catch(err) {console.log(`Error with meme \n${err}`)}
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