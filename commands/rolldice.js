const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
  try {

  let replies = ["1", "2", "3", "4", "5", "6", "Null"]

  let result = Math.floor((Math.random() * replies.length))

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#000000")
  .addField("Your Dice number is...", replies[result])

  message.channel.send(ballembed);
    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on rolldice commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: "rolldice",
  category: "Fun",
  description: "Role the dice and get a number",
  usage: "rolldice"
};