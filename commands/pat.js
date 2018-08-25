const cooldown = new Set();
module.exports.run = async (bot, message, args) => { // Run the command when a command is called
  try {
if (cooldown.has(message.author.id)) {
  return message.reply(`This command have a cooldown of 2 **Seconds**`);
}
  cooldown.add(message.author.id);
  setTimeout(() => {
    cooldown.delete(message.author.id);
  }, 2000);
  
    var fs = require('fs');
    var Discord = require('discord.js');

        var images = ["https://cdn.weeb.sh/images/r1Y5L6NCZ.gif", "https://cdn.weeb.sh/images/SJudB96_f.gif", "https://cdn.weeb.sh/images/rkTC896_f.gif", "https://cdn.weeb.sh/images/Byd3kktw-.gif", "https://cdn.weeb.sh/images/B1PnJJYP-.gif", "https://cdn.weeb.sh/images/B1SOzCV0W.gif", "https://cdn.weeb.sh/images/HyG2kJKD-.gif", "https://cdn.weeb.sh/images/ryLKqTVCW.gif", "https://cdn.weeb.sh/images/SJmW1RKtb.gif", "https://cdn.weeb.sh/images/HkJ2VknqG.gif", "https://cdn.weeb.sh/images/rkADh0sqM.gif", "https://cdn.weeb.sh/images/HyWlxJFvb.gif", "https://cdn.weeb.sh/images/B1FqkJKPW.gif", "https://cdn.weeb.sh/images/SJLaWWRSG.gif", "https://cdn.weeb.sh/images/BkaRWA4CZ.gif"];
        var rand = Math.floor(Math.random() * images.length);
        var randomImage = images[rand];
  
          const patEmb = new Discord.RichEmbed()
            .setColor(0xA901DB)
            .setImage(randomImage);
        const sadEmb = new Discord.RichEmbed()
            .setColor(0xA901DB)
            .setImage('https://cdn.weeb.sh/images/Hy4CS1h5G.gif');
        if (!args[0]) {
            message.channel.send(`<@${message.author.id}> Pat <@${message.author.id}>.. oh wait you can't pat yourself!`, {
                embed: sadEmb
            });
            return;
        }

        if (!message.mentions.users.first()) return message.channel.send(`Please mention someone!`).then(msg => {
            msg.delete(3000)
        });
        message.channel.send(`<@${message.author.id}> patted ${args[0]}`, {
            embed: patEmb
        });
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
                  const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on pat Commands`)
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
  name: 'pat',
    category: 'fun',
    usage: '[mention]',
    description: 'pat user',
}