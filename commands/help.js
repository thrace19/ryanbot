const Discord = require('discord.js')

exports.run = (client, message, args, level) => {
  try {
  // If no specific command is called, show all filtered commands.
  if (!args[0]) {
    // Filter all commands by which are available for the user's level, using the <Collection>.filter() method.
    const myCommands = message.guild ? client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level) : client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level &&  cmd.conf.guildOnly !== true);

    // Here we have to get the command names only, and we use that array to get the longest name.
    // This make the help commands "aligned" in the output.
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
    .setDescription(`Hello **${message.author.tag}**\n\nFor full commands list can be found at my [website](https://ryanbotc.glitch.me/)\nIf you need help with bot you can join the [support server](https://discord.gg/FTmxve7). \n\n[Invite](https://discordapp.com/oauth2/authorize?client_id=450233057908097024&permissions=8&scope=bot) the bot to your server! `)
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter('<> = Must be placed. [] = Optional')
    message.author.send(dmembed)
    let channelembed = new Discord.RichEmbed()
    .setDescription(`<@${message.author.id}> Check your DM or use this link to go to my [website](https://ryanbotc.glitch.me/)`)
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
    } catch(err) {console.log(`Error with help \n${err}`)}
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