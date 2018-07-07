const discord = require("discord.js")
const send = require('quick.hook')

module.exports = (client, guild) => {
    const rbnjoin = client.channels.get("449130097136369664"); //CHANGE TO YOUR CHANNEL-ID TO GET NOTIFICATIONS
    let rbnEmbed = new discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setTitle(`RyanBot started serving **${guild.name}**`)
    .setDescription(`**Guild Owner**: ${guild.owner}\n**Guild Name**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Guild Channels Count**: ${guild.channels.size} \n**Members Gained**: ${guild.memberCount}`)
    send(rbnjoin, rbnEmbed, {
        name: `Bot Joined`,
        icon: `https://cdn.discordapp.com/attachments/421620705570979843/462632872616919053/R-logo512.png`
    })
 }