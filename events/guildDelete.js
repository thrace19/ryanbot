const discord = require("discord.js")
const send = require('quick.hook')

module.exports = async (client, guild) => {
    const rbnleave = client.channels.get("449130097136369664"); //CHANGE TO YOUR CHANNEL-ID TO GET NOTIFICATIONS
    let rbnembed = new discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setThumbnail(guild.iconURL)
    .setColor(`RED`)
    .setTitle(`RyanBot Has stopped serving **${guild.name}**`)
    .setDescription(`**Guild Owner**: ${guild.owner}\n**Guild Name**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Guild Channels Count**: ${guild.channels.size} \n**Members Lost**: ${guild.memberCount}`)
    send(rbnleave, rbnembed, {
        name: `Bot leaving`
    })
    const BFD = require("bfd.js");
  const bfd = new BFD('ed69fcfdd3d5a3190a0d6cea01c61efafd0511493afe08a063163f4a2a6e7bd3dc77afa0949e89b8b0f8d987f943572930dc3da4471be14e43a36c3e6b1c498e');
  bfd.postStats(client.guilds.size, client.user.id);
    console.log(`Botsfordiscord server counts has been published!`)
};