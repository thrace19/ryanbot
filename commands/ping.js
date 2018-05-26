exports.run = (client, message) => {
  message.channel.send('Ping?')
    .then(msg => {
      msg.edit(`:ping_pong: Pong! (took: ${msg.createdTimestamp - message.createdTimestamp}ms)`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping/Pong Commmand',
  usage: 'ping'
};
