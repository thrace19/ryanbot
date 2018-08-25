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

        var images = ["https://i.imgur.com/wOmoeF8.gif", "https://i.imgur.com/ntqYLGl.gif", "https://i.imgur.com/nrdYNtL.gif", "https://media1.tenor.com/images/49a21e182fcdfb3e96cc9d9421f8ee3f/tenor.gif?itemid=3532079", "https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093", "https://media1.tenor.com/images/7db5f172665f5a64c1a5ebe0fd4cfec8/tenor.gif?itemid=9200935", "https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif", "https://thumbs.gfycat.com/GleamingHandyAmoeba-size_restricted.gif", "http://i.imgur.com/rlOJqHL.gif", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNv0YhjF3zJQq2allRq93LDBp3Kf1rkvkLdtNnhh0rF07KEgsxeQ", "https://data.whicdn.com/images/112409418/original.gif", "https://i.pinimg.com/originals/fd/ff/96/fdff96422a17aaaf09faabca8af593f2.gif", "https://media.tenor.com/images/2e1d34d002d73459b6119d57e6a795d6/tenor.gif", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQKySHZVJ-sCrb0VF-qdmngzxr_B0u_exdgvtA4d9fFaN4Hfd", "https://www.wykop.pl/cdn/c3201142/comment_zravsKyrGXo6VOPAxA4xUAgJXDpX0fLZ.gif", "https://img.gifmagazine.net/gifmagazine/images/545859/original.gif", "https://lh3.googleusercontent.com/-3odb_qDB-C0/WNGqher3TSI/AAAAAAAAEbo/XnrxiwvNJKUKUFczHjNfyDVer-wn9Sx3wCJoC/w500-h346/tumblr_n9tj4oCzzk1rbnx7io1_500.gif"];
        var rand = Math.floor(Math.random() * images.length);
        var randomImage = images[rand];

        const patEmb = new Discord.RichEmbed()
            .setColor(0xA901DB)
            .setImage(randomImage);
        const sadEmb = new Discord.RichEmbed()
            .setColor(0xA901DB)
            .setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif');
        if (!args[0]) {
            message.channel.send(`<@${message.author.id}> hugged <@${message.author.id}>.. Oh wait! You can't hug yourself!`, {
                embed: sadEmb
            });
            return;
        }

        if (!message.mentions.users.first()) return message.channel.send(`Please mention someone!`).then(msg => {
            msg.delete(3000)
        });
        message.channel.send(`<@${message.author.id}> hugged ${args[0]}`, {
            embed: patEmb
        });
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
                  const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on hug Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
}

exports.help = {
  name: 'hug',
    category: 'fun',
    usage: '[mention]',
    description: 'Hugggg',
}