exports.run = (client, msg, args) => {
  try {
  const members = msg.guild.members.filter(member => member.user.presence.game && /(discord\.(gg|io|me|li)\/.+|discordapp\.com\/invite\/.+)/i.test(member.user.presence.game.name));
  return msg.channel.send(members.map(member => `ID:\`${member.id}\` Name: ${member.displayName} has a **invite link** as their game status!`).join("\n") || "No one has a **Invite Link** as their game!");
    } catch(err) {console.log(`Error with checkinvites \n${err}`)}
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