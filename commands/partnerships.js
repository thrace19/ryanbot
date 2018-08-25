const Discord = require('discord.js')

exports.run = (client, message) => {
  try {
  let partneremb = new Discord.RichEmbed()
  .setAuthor(`RyanBot Partnership`, client.user.displayAvatarURL)
  .setDescription(`If you want become partnerships dm RyansHDs#4461 or join [support server](https://discord.gg/FTmxve7)`)
  .addField(`__Servers Partnerships__`, `[**HDClan**](https://discord.gg/gxE2Ya7)\n[**RyanBot Support**](https://discord.gg/FTmxve7)`,true)
  .addField(`__Bot partnerships__`, `[**RyanBot**](https://discordapp.com/oauth2/authorize?client_id=450233057908097024&permissions=8&scope=bot)\n[**Hinami**](https://discordapp.com/oauth2/authorize?client_id=447759514746224641&scope=bot&permissions=2146958591)`, true)
  .setFooter('Updated Daily')
  .setColor('#01fc0c')
  message.channel.send(partneremb)
    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
                  const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on partnerships Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
}

exports.help = {
  name: 'partnerships',
    category: 'System',
    usage: 'partnership',
    description: 'Check the bot partnership',
}