const Discord = require('discord.js');
const sm = require('string-similarity');
module.exports.run = async(bot, message, args) => {
  try {
if (!args[0]) message.reply('Please input some text.');
let members = [];
let indexes = [];

message.guild.members.forEach(function(member){
members.push(member.user.username);
indexes.push(member.id);

})
 let match = sm.findBestMatch(args.join(''), members);
let username = match.bestMatch.target;

let user = message.guild.members.get(indexes[members.indexOf(username)]);
  let aEmbed = new Discord.RichEmbed()
  .setDescription('Do you mean: ' + `**${user}**`)
      .setColor('RANDOM');
      message.channel.send(aEmbed);
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
                  const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on autocomplete Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
};
  
module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
}

module.exports.help = {
	name: "auto",
  category: 'Util',
  description: 'Find a user with only text',
  usage: 'auto <text>',
}