const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let{body} = await superagent
  .get(`http://aws.random.cat/meow`);

  let catembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Here Your cat")
  .setFooter("Kawaii Cat.")
  .setImage(body.file);

  message.channel.send(catembed);

}

exports.help = {
	name: "cat"
}