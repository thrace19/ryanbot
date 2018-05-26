module.exports = (client, member) => {
  client.log('Log', `${member.user.tag} (${member.id}) has joined ${member.guild.name} (${member.guild.id})`);
  const welcomeChannel = member.guild.channels.find('name', 'newuser');
  if (welcomeChannel) {
    welcomeChannel.send(`Welcome **${member.user.tag}** to **${member.guild.name}**`);
  }
};