const Discord = require('discord.js')
const superagent = require('superagent')

module.exports.run = async (client,message,args) => {

	let{body} = await superagent
	.get(`https://dog.ceo/api/breeds/image/random`);

	let dogEmb = new Discord.RichEmbed()
	.setColor("RANDOM")
    .setTitle("BROKEN")
    .setImage(body.file)

    message.channel.send(dogEmb)
}

exports.help = {
	name: "dog"
}