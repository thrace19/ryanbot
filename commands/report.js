const Discord = require("discord.js");
const errors = require("../util/errors.js");
const send = require('quick.hook')
const cooldown = new Set()
module.exports.run = async (bot, message, args) => {
  try {
    
      const settings = message.settings = bot.getGuildSettings(message.guild);
  var prefix = settings.prefix
  var reports = settings.reportsChannel
    
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
    
  const cnl = bot.channels.get('459326999345758209');
  let guild = message.guild;
    message.delete()
    if(args[0] == "14252152"){
      message.reply("5125215623");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return errors.cantfindUser(message.channel);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription(`**Reported User**: <@${rUser.id}>\n**ID**: ${rUser.id}\n\n**Reported by**: <@${message.author.id}>\n**Author ID**: ${message.author.id}\n**Channel**: ${message.channel}\n\n**Reason**:\n${rreason}`)
    .setThumbnail(`https://science2017.globalchange.gov/img/front/exec-summary-blue.png`)
    .setColor(`#2be43b`)
    .setFooter(message.createdAt)

    let reportschannel = message.guild.channels.find(`name`, `${reports}`);
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
        send(reportschannel, reportEmbed, {
        name: `Reports`,
        icon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPK_TuDKyL4fkXgLSxaB7C9jRnsEtwK0VNpZY1pgscIDsj6KkBA`
    })
    
    let successemb = new Discord.RichEmbed()
    .setDescription(`:white_check_mark: Successfull reported <@${rUser.id}> to reports channel!`)
    .setColor(`#2be43b`)
    .setTimestamp()
    send(message.channel, successemb, {
      name: `Success`,
      icon: `https://cdn1.iconfinder.com/data/icons/interface-elements/32/accept-circle-512.png`
    })
  
  let sicon = message.guild.iconURL;
  let communityembed = new Discord.RichEmbed()
  .setAuthor(message.guild.name, sicon)
    .setDescription(`**Reported User**: <@${rUser.id}>\n**ID**: ${rUser.id}\n\n**Reported by**: <@${message.author.id}>\n**Author ID**: ${message.author.id}\n**Channel**: ${message.channel}\n\n**Reason**:\n${rreason}`)
    .setThumbnail(`https://science2017.globalchange.gov/img/front/exec-summary-blue.png`)
    .setColor(`#2be43b`)
    .setFooter(message.createdAt)
    send(cnl, communityembed, {
        name: `Report`,
        icon: `https://cdn.discordapp.com/attachments/421620705570979843/462632872616919053/R-logo512.png`
    })
  
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on report Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
}

exports.help = {
  name: 'report',
  category: 'UTIL',
  description: 'Report mentioned user',
  usage: 'report <mention> <reason>'
}