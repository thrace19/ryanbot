const Discord = require("discord.js")
const settings = require("../settings.json")

module.exports.run = (client, message) => {
	const funEmb = new Discord.RichEmbed()
	.setTitle("Fun Commands!")
	.setColor("RANDOM")
	.addField(".luckynumber", "Generate Random Luckynumber")
	.addField(".8ball", "Ask the magical 8ball a question.")
	.addField(".coinflip", "Flips a Coin!")
	.addField(".cat", "Generate Random Cat!")
	.addField(".dog", "Generate Random Dog! [broken due the website expired]")
	.addField(".rps", "Play Rock Paper Scissors with bot")

	message.channel.send(funEmb)
}

exports.help = {
	name: 'fun',
	usage: 'fun'
}