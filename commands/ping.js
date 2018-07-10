const Discord = require('discord.js')
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
  const msg = await message.channel.send("Ping?");
  const embed = new Discord.RichEmbed()
  .setTitle('Pong!')
  .setDescription(`Latency is ${msg.createdTimestamp - message.createdTimestamp}ms.\nAPI Latency is ${Math.round(client.ping)}ms`)
  msg.edit(embed)
    } catch(err) {console.log(`Error with ping \n${err}`)}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: "ping",
  category: "User Commands",
  description: "It... like... pings. Then Pongs. And it\"s not Ping Pong.",
  usage: "ping"
};