const Discord = require('discord.js')
exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  try {
 let rebembed = new Discord.RichEmbed()
 .setTitle('Rebooting...')
 .setDescription(`Bot rebooting...`)

 await message.channel.send(rebembed)
  
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  });
  process.exit(1);
    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on reboot commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owners"
};

exports.help = {
  name: "reboot",
  category: "System",
  description: "Shuts down the bot. If running under PM2, bot will restart automatically.",
  usage: "reboot"
};