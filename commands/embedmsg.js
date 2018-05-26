const Discord = require("discord.js")
const settings = require("../settings.json")
module.exports.run = (client, message) => {
	message.delete()
	let msgEmb = new Discord.RichEmbed()
	.setTitle("Title goes here!")
	.setDescription("Description goes here!")
	.setColor("RANDOM") //color goes here, "RANDOM" for random colour
	.addField("Field1", "Field2")
	.addField("Field1", "Field2")
	.addField("Field1", "Field2")
	.addField("Field1", "Field2")
	.addField("Field1", "Field2")
	.setTimestamp()
	.setFooter("")

	message.channel.send(msgEmb)

}

exports.help = {
	name: "scrt2",
	usage: "mssd"
} 