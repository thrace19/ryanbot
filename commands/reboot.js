const Discord = require('discord.js')
exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  try {
 let rebembed = new Discord.RichEmbed()
 .setTitle('Rebooting...')
 .setDescription(`<@${message.author.id}> has used magic to reboot the bot!`)

 await message.channel.send(rebembed)
  
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  });
  process.exit(1);
    } catch(err) {console.log(`Error with reboot \n${err}`)}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Owners"
};

exports.help = {
  name: "reboot",
  category: "System",
  description: "Shuts down the bot. If running under PM2, bot will restart automatically.",
  usage: "reboot"
};