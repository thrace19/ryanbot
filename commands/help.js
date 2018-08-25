const Discord = require('discord.js')
const cooldown = new Set();
exports.run = (client, message, args, level) => {
  try {
      const settings = message.settings = client.getGuildSettings(message.guild);
  var prefix = settings.prefix
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
  if (!args[0]) {
    const myCommands = message.guild ? client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level) : client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level &&  cmd.conf.guildOnly !== true);
    const commandNames = myCommands.keyArray();
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

    let currentCategory = "";
    let output = `>Command List<\n\n[Use ${message.settings.prefix}help <commandname> for details]\n`;
    const sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
    sorted.forEach( c => {
      const cat = c.help.category.toUpperCase();
      if (currentCategory !== cat) {
        output += `\u200b\n== ${cat} ==\n`;
        currentCategory = cat;
      }
      output += `${message.settings.prefix}${c.help.name}${" ".repeat(longest - c.help.name.length)} - ${c.help.description}\n`;
    });
    let dmembed = new Discord.RichEmbed()
    .setAuthor(`RyanBot Help`, message.author.displayAvatarURL)
    .setDescription(`Hello **${message.author.tag}**\n\nFor full commands list can be found at my [website](https://docs-ryanbot.glitch.me/)\nIf you need help with bot you can join the [support server](https://discord.gg/FTmxve7). \n\n[Invite](https://discordapp.com/oauth2/authorize?client_id=450233057908097024&permissions=8&scope=bot) the bot to your server!\n\nIf you like this bot you can [vote](https://discordbots.org/bot/450233057908097024/vote) it  `)
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter('<> = Must be placed. [] = Optional')
    message.author.send(dmembed)
    let channelembed = new Discord.RichEmbed()
    .setTitle(`My Basic Commands`)
    .setColor(`GREEN`)
    .setDescription(`__**Basic Commands**__:\n${prefix}userinfo - Shows info about you or other people\n${prefix}serverinfo - Shows info about current server\n${prefix}ping - Show bot responses\n${prefix}cmdlist - View full commands list on website.\n${prefix}stats - Get statistic about the bot\n\nIf your DM/PM unlocked check your DM/PM Right now.`)
    message.channel.send(channelembed)
    

  } else {
    // Show individual command's help.
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      if (level < client.levelCache[command.conf.permLevel]) return;
      let cmdhelp = new Discord.RichEmbed()
      .setTitle(`Command Help`)
      .setDescription(`Command name > ${command.help.name}\nCommand usage > ${command.help.usage}\nCommand aliases > ${command.conf.aliases.join(", ")}\nCommand description > ${command.help.description}`)
      .setColor('RANDOM')
      message.channel.send(cmdhelp)
    }
  }
    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
                  const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on help Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["h", "halp"],
  permLevel: "Users"
};

exports.help = {
  name: "help",
  category: "User Commands",
  description: "Displays all the available commands for your permission level.",
  usage: "help [command]"
};