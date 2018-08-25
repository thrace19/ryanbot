const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  try {
  if (!args || args.length < 1) return message.reply("Must provide a command to reload.");

  let response = await client.unloadCommand(args[0]);
  if (response) {
    const errunload = new Discord.RichEmbed()
    .setDescription(`Error Unloading: ${response}`)
    .setColor(`RED`)
    return message.channel.send(errunload)
  }

  response = client.loadCommand(args[0]);
  if (response) {
    const loaderr = new Discord.RichEmbed()
    .setDescription(`Error loading: ${response}`)
    .setColor(`RED`)
    }
    
    const reloadedemb = new Discord.RichEmbed()
    .setDescription(`Command **${args[0]}** has been reloaded.`)
    .setColor(`GREEN`)
    
    message.channel.send(reloadedemb)
    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
            const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on reload Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Admins"
};

exports.help = {
  name: "reload",
  category: "System",
  description: "Reloads a command that\"s been modified.",
  usage: "reload [command]"
};