const Discord= require('discord.js')
const send = require('quick.hook')
const db = require('quick.db')

module.exports = async (client, message, guild) => {
  let lgcnl = client.channels.get("459324984339333122")
  if (message.author.bot) return;

  db.add(`globalMessages_${message.author.id}`)
  
  const settings = message.settings = client.getGuildSettings(message.guild);

  if (message.content.indexOf(settings.prefix) !== 0) return;

  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const level = client.permlevel(message);

  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));

  if (!cmd) return;

  if (cmd && !message.guild && cmd.conf.guildOnly)
    return message.channel.send("This command is unavailable via private message. Please run this command in a guild.");

  if (level < client.levelCache[cmd.conf.permLevel]) {
    if (settings.systemNotice === "true") {
      let invalidperm = new Discord.RichEmbed()
      .setAuthor(`${message.author.username} invalid permission `, message.author.displayAvatarURL)
      .setDescription(`**Your Permission Level**: ${level} (${client.config.permLevels.find(l => l.level === level).name}\n**This command requires permission**: ${client.levelCache[cmd.conf.permLevel]} (${cmd.conf.permLevel})`)
      return message.channel.send(invalidperm)
    } else {
      return;
    }
  }

  message.author.permLevel = level;
  
  message.flags = [];
  while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1));
  }
  let logembed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag} Use RyanBot Commands!`, message.author.displayAvatarURL)
  .setDescription(`**User permission name**: ${client.config.permLevels.find(l => l.level === level).name}\n**User Name**: ${message.author.tag}\n**User ID**: ${message.author.id}\n**Command Name**: ${cmd.help.name}\n**Server Name**: ${message.guild.name}`)
  .setTimestamp()
  .setColor('RANDOM')
    send(lgcnl, logembed, {
        name: `Commands Logs`,
        icon: `https://cdn.discordapp.com/attachments/421620705570979843/462632872616919053/R-logo512.png`
    })
  cmd.run(client, message, args, level);
};