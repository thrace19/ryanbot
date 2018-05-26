const Discord = require("discord.js")
const settings = require("../settings.json")

module.exports.run = (client, message) => {
	const devEmb = new Discord.RichEmbed()
	.setTitle("Developer Commands")
	.setDescription("This commands only for developer bot")
	.setColor("RANDOM")
	.addField(".shutdown", "Force the bot to shutdown")
	.addField(".reload", "Reload [commands]")
	.addField(".eval", "Secret Commands !")

	.setTimestamp()

	message.channel.send(devEmb)
}

exports.help = {
	name: "dev",
	usage: "dev"
}