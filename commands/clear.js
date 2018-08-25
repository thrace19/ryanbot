const Discord = require("discord.js");

module.exports.run = async (client, message, args, messages) => {
try {
	const user = message.mentions.users.first();
	if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Sorry, you don\'t have permission to delete or purge messages!')
	const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
  const embed1 = new Discord.RichEmbed()
  .setDescription(`Please provide a number between 2 and 100 for the number of messages to delete`)
  .setColor(`RED`)
	if (!amount || amount < 2 || amount > 100) return message.channel.send(embed1)
  const embed2 = new Discord.RichEmbed()
  .setDescription(`Specify a user and amount, or just an amount, of messages to delete or purge, minimum 2 messages to be deleted`)
  .setColor(`RED`)
	if (!amount || amount < 2 || amount > 100 && !user) return message.channel.send(embed2)
	message.channel.fetchMessages({
			limit: amount
		, })
		.then((messages) => {
			if (user) {
				const filterBy = user ? user.id : client.user.id;
				messages = messages.filter(m => m.author.id === filterBy)
					.array()
					.slice(0, amount);
			}
			message.channel.bulkDelete(messages)
				.catch(error => console.log(error.stack));
		});
    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
                  const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on clear Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
};
  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Moderators"
};

exports.help = {
  name: 'clear',
  category: 'Mod',
  description: 'Clear X amount of messages from a given channel.',
  usage: 'clear [number]'
};
