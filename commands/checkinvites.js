const discord = require('discord.js')
exports.run = (client, msg, args) => {
  try {
  const members = msg.guild.members.filter(member => member.user.presence.game && /(discord\.(gg|io|me|li)\/.+|discordapp\.com\/invite\/.+)/i.test(member.user.presence.game.name));
  return msg.channel.send(members.map(member => `ID:\`${member.id}\` Name: ${member.displayName} has a **invite link** as their game status!`).join("\n") || "No one has a **Invite Link** as their game!");
    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      msg.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
                  const erroremb = new discord.RichEmbed()
      .setTitle(`Error on checkinvites Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ci"],
  permLevel: "Moderators"
};

exports.help = {
  name: 'checkinvites',
  category: 'Util',
  description: 'Returns a list of members with an invite as their game.',
  usage: 'checkinvites'
};