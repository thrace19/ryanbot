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
    client.user.setActivity(status[rstatus], {type:"STREAMING", url:"https://twitch.tv/ryanshds"})
}; setInterval(status, 60000)

  const BFD = require("bfd.js");
  const bfd = new BFD('ed69fcfdd3d5a3190a0d6cea01c61efafd0511493afe08a063163f4a2a6e7bd3dc77afa0949e89b8b0f8d987f943572930dc3da4471be14e43a36c3e6b1c498e');
  bfd.postStats(client.guilds.size, client.user.id);
    console.log(`Botsfordiscord server counts has been published!`)
  
};