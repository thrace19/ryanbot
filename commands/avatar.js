const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {
    let user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(user.username)
        .setImage(user.displayAvatarURL)
        .setFooter("Nice picture you got there!")
        .setTimestamp()
        
    message.channel.send(embed)
    
}

exports.help = {
	name: 'avatar',
	usage: 'avatar <user>'
}