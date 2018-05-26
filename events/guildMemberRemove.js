module.exports = member => {
  const GoodbyeChannel = member.guild.channels.find('name', 'newuser');
  if (goodbyeChannel) {
    goodbyeChannel.send(`Bye Bye ${member.user.tag}!`);
  }
};
