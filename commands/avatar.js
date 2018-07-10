const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {
  try {
  
    let replies = ["Awesome Picture!", "Nice picture you got there!", "Nice picture"]
  
  let result = Math.floor((Math.random() * replies.length))
    let user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${user.username} Avatar`)
        .setImage(user.displayAvatarURL)
        .setFooter(replies[result])
        .setTimestamp()
        
    message.channel.send(embed)
  } catch(err) {console.log(`Error with avatar \n${err}`)}
    
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
	name: 'avatar',
  category: 'Util',
  description: 'Show mentioned user avatar',
	usage: 'avatar <user>'
}