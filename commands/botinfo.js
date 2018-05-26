const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Creator", "<@292936070603997185>")
    .addField("Official Server", "https://discord.gg/gxE2Ya7")
	  .addField("Shutdown Info", "if the bot were offline that mean my pc are broken")
	  .addField("Invite link", "https://discordapp.com/api/oauth2/authorize?client_id=347936480779436033&permissions=2146958583&scope=bot")
    .addField("Created On", bot.user.createdAt);

    message.channel.send(botembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "EVERYONE"
};

exports.help = {
  name: 'botinfo',
  description: 'Show info about this bot',
  usage: 'botinfo'
};