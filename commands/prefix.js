const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You dont have MANAGE_SERVER permission!");
  if(!args[0] || args[0 == "help"]) return message.reply("Usage: !prefix <desired prefix here>");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]}`)
  .setTimestamp();

  message.channel.send(sEmbed);

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'prefix',
  description: 'Change the bot current prefix in this server',
  usage: 'prefix [new prefix]'
};