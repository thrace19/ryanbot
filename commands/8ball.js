const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(!args[1]) return message.reply("Please ask a full question!");
let replies = ["Yes.", "No.", "I don't know.", "of course.", "Ask again later", "Most likely", "As I see it, yes", "Not sure", "Maybe", "Nope", "NO - It may cause dissaster!", "My Source say yes", "Most likely no"];

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(0).join(" ");

let ballembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("RANDOM")
.addField(":question:Question", question)
.addField("Answer", replies[result]);

message.channel.send(ballembed);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Everyone"
};

exports.help = {
  name: '8ball',
  description: 'Ask the bot to answer your question randomly',
  usage: '8ball [Question]'
};