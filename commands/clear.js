const superagent = require('superagent');
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  try {
  message.delete();
  const user = message.mentions.users.first();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have `MANAGE_MESSAGES` Permission to do this!");
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
if (!amount) return message.reply('Must specify an amount to delete!');
if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to clear!');
message.channel.fetchMessages({
 limit: amount,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : bot.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on clear commands!\n\nError:\n\n ${err}`)
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
