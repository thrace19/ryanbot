const discord = require("discord.js")
const send = require('quick.hook')

module.exports = (client, guild) => {
    const rbnleave = client.channels.get("449130097136369664"); //CHANGE TO YOUR CHANNEL-ID TO GET NOTIFICATIONS
    let rbnembed = new discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setTitle(`RyanBot Has stopped serving **${guild.name}**`)
    .setDescription(`**Guild Owner**: ${guild.owner}\n**Guild Name**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Guild Channels Count**: ${guild.channels.size} \n**Members Lost**: ${guild.memberCount}`)
    send(rbnleave, rbnembed, {
        name: `Bot leaving`,
        icon: `https://cdn.discordapp.com/attachments/421620705570979843/462632872616919053/R-logo512.png`
    })
 }