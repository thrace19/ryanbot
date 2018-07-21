module.exports = (client, member) => {
  const settings = client.getGuildSettings(member.guild);

  if (settings.leaveEnabled !== "true") return;

  const welcomeMessage = settings.leaveMessage.replace("{{user}}", member.user.tag);

  member.guild.channels.find("name", settings.leaveChannel).send(welcomeMessage).catch(console.error);
};