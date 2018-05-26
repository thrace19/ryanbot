exports.parseUser = (message, user) => {
  const member = message.guild.member(user) || null;
  if (user.id === message.author.id) {
    return message.channel.send('You cant do that at yourself!');
  } else if (member) {
    if (member.highestRole.position >= message.member.highestRole.position) return message.channel.send('The targeted member has higher role than you.');
  }
  return user;
};
