const Discord = require("discord.js")
const settings = require("../settings.json")

module.exports.run = (client, message) => {
	const modEmb = new Discord.RichEmbed()
	.setTitle("Moderation Commands!")
	.setColor("RANDOM")
	.addField(".clear", "Clear X message")
	.addField(".ban", "Ban mentioned user")
	.addField(".kick", "Kick mentioned user")
	.addField(".mute", "Mute mentioned user [required muted role]")
	.addField(".warn", "Warn mentioned user [required mod-log channel]")
	.addField(".unban", "Unban user [required mod-log channel]")
	.addField(".warnlevel", "Check warnlevel on mentioned user")
	.addField(".tempmute", "Temporary mute mentioned user for specify time")
	.addField(".removerole", "Remove role from mentioned user")
	.addField(".addrole", "Add role on mentioned user")
	.addField(".poll", "Create simple poll")
	.addField(".reason", "Updates an unset moderator action")
	.addField(".prefix", "Change the bot current prefix in this server")

	.setTimestamp()
	message.channel.send(modEmb)
}



exports.help = {
	name: 'mod',
	usage: 'mod [commands]'
}