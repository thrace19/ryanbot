const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {
  try {
  let replies = ["Kawaii Cat", "Awesome Cat", "Cute Cat", "Beutifull Cat"]
  
  let result = Math.floor((Math.random() * replies.length))

  let{body} = await superagent
  .get(`http://aws.random.cat/meow`);

  let catembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Here Your cat")
  .setFooter(replies[result])
  .setImage(body.file);

  message.channel.send(catembed);
    } catch(err) {console.log(`Error with cat \n${err}`)}

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
	name: "cat",
  category: "Fun",
  description: "Generate Random Cat",
  usage: "cat"
}