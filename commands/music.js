const Discord = require("discord.js")

module.exports.run = (client,message) => {
	let msEmb = new Discord.RichEmbed()
	.setTitle("Music Commands")
	.setColor("RANDOM")
	.addField(".play", "Play music!")
	.addField(".skip", "Skip the queue music! [ BROKEN ]")
	.addField(".stop", "Stop the current music! [ Alternative to skip music ]")

	message.channel.send(msEmb)
}

exports.help = {
	name: "music"
}