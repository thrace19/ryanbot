const Discord = require("discord.js");
const config = require('../config.js')
const moment = require("moment");
require("moment-duration-format");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

module.exports.run = async (bot, message, args) => {
  try {
          const cmdFiles = await readdir("./commands/");
    const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor(`${bot.user.tag} Information`, bot.user.displayAvatarURL)
    .setColor("#15f153")
    .setThumbnail(bicon)
    .setDescription(`**Bot Name**: ${bot.user.username}\n**Owner**: <@${config.ownerID}>\n**Users**: ${bot.users.size}\n**Servers**: ${bot.guilds.size}\n**Commands Count**: 68\n**Uptime**: ${duration}\n**Channels**: ${bot.channels.size.toLocaleString()}`)
    .addField('Useful Links', `[Support server](https://discord.gg/FTmxve7) - [Invite](https://discordapp.com/oauth2/authorize?client_id=450233057908097024&permissions=8&scope=bot) - [Vote](https://discordbots.org/bot/450233057908097024)`)
    .setFooter(`Bot by RyansHDs#4461 ||`)

    message.channel.send(botembed);
    } catch(err) {console.log(`Error with botinfo \n${err}`)}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: 'botinfo',
  category: 'User Commands',
  description: 'Show info about this bot',
  usage: 'botinfo'
};