const Discord = require('discord.js')
const send = require('quick.hook')

module.exports = async (client, message) => {
  // Log that the bot is online.
  const chnl = client.channels.get('462800219998912522')
  client.logger.log(`[READY] ${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "ready");
  let onlinestats = new Discord.RichEmbed()
  .setAuthor(`${client.user.username}`, client.user.displayAvatarURL)
  .setTitle(`Bot has been restarted!`)
  .setThumbnail(client.user.displayAvatarURL)
  .setDescription(`${client.user.username} Has been restarted!\nCaused by: Hosting / Updated.`)
  .setFooter(`Time before restart ->`)
  .setTimestamp()
  .setColor(`#d10a0c`)
  chnl.send(onlinestats)
  
    function status(){
    let status = [
        `.help | ${client.guilds.size} Guilds`,
      `.help | With RyansHDs#4461`,
      `.help | ${client.users.size} Users`,
      `.help | https://ryanbotc.glitch.me/`
    ]
    let rstatus = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[rstatus], {type:"PLAYING", url:"https://twitch.tv/ryanshds"})
}; setInterval(status, 60000)

};