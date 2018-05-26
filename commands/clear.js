exports.run = (client, message, args) => {
  const messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "ADMINISTRATORS"
};

exports.help = {
  name: 'clear',
  description: 'Clear X amount of messages from a given channel.',
  usage: 'clear [number]'
};
