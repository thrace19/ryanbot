const cooldown = new Set();
module.exports.run = async (bot, message, args) => { // Run the command when a command is called
try {
  
      if (cooldown.has(message.author.id)) {
    let cooldownemb = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
    .setDescription(`You need to wait 10 seconds!`)
    .setColor(`RED`)
    .setFooter(`This message will be deleted in 10 seconds..`)
    return message.channel.send(cooldownemb).then(msg => {
     msg.delete(10000) 
    })
    
    }
    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
  
    var fs = require('fs');
    var Discord = require('discord.js');

        var images = ['https://cdn.weeb.sh/images/Hky7MImwW.gif', 'https://cdn.weeb.sh/images/ByD4GLXPZ.gif', 'https://cdn.weeb.sh/images/HklJGIXPW.gif', 'https://cdn.weeb.sh/images/S1uZMIXP-.gif', 'https://cdn.weeb.sh/images/S1X7GIXw-.gif', 'https://cdn.weeb.sh/images/ryuxzI7DW.gif', 'https://cdn.weeb.sh/images/r1n7M87wW.gif', 'https://cdn.weeb.sh/images/SJkffIXw-.gif', 'https://cdn.weeb.sh/images/BJogMImDW.gif', 'https://cdn.weeb.sh/images/BJH4f8mP-.gif']
        var rand = Math.floor(Math.random() * images.length);
        var randomImage = images[rand];
  
          const blushembed = new Discord.RichEmbed()
            .setColor(0xA901DB)
          .setDescription(`${args[0]} blushes`)
            .setImage(randomImage);
        const sadEmb = new Discord.RichEmbed()
            .setColor(0xA901DB)
        .setDescription(`${message.author.tag} blushes`)
            .setImage(randomImage);
        if (!args[0]) {
            message.channel.send(sadEmb)
            return;
        }

        if (!message.mentions.users.first()) return message.channel.send(`Please mention someone!`).then(msg => {
            msg.delete(3000)
        });
        message.channel.send(blushembed)
  } catch(err) {console.log(`Error with blush \n${err}`)}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
}

exports.help = {
  name: 'blush',
    category: 'fun',
    usage: 'blush',
    description: 'blush',
}