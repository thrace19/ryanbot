const Discord = require("discord.js");
const config = require('../config.js')
const moment = require("moment");
require("moment-duration-format");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const cooldown = new Set()
module.exports.run = async (bot, message, args) => {
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
    
          const cmdFiles = await readdir("./commands/");
    const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor(`${bot.user.tag} Information`, bot.user.displayAvatarURL)
    .setColor("#15f153")
    .setThumbnail(bicon)
    .setDescription(`**Bot Name**: ${bot.user.username}\n**Owner**: <@${config.ownerID}> | RyansHDs#4461\n**Users**: ${bot.users.size}\n**Servers**: ${bot.guilds.size}\n**Commands Count**: 70\n**Uptime**: ${duration}\n**Channels**: ${bot.channels.size.toLocaleString()}`)
    .addField('Useful Links', `[Support server](https://discord.gg/FTmxve7) - [Invite](https://discordapp.com/oauth2/authorize?client_id=450233057908097024&permissions=8&scope=bot) - [Vote](https://discordbots.org/bot/450233057908097024) - [Donate](https://www.patreon.com/RyanBot)`)
    .setFooter(`Bot by RyansHDs#4461 ||`)

    message.channel.send(botembed);
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on botinfo commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: 'botinfo',
  category: 'User Commands',
  description: 'Show info about this bot',
  usage: 'botinfo'
};