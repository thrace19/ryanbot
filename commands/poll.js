const Discord = require("discord.js")
const cooldown = new Set();

exports.run = async (bot, message, args, tools) => {
  try {
        if (cooldown.has(message.author.id && message.guild.id)) {
        return message.reply(`This command have a cooldown of 20 **Seconds**`);
    }
    cooldown.add(message.author.id && message.guild.id);
    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 20000);
  
  if (!message.member.hasPermission('MANAGE_ROLES') && message.author.id !== '292936070603997185') return message.channel.send('Sorry, you don\'t have permission to create poll!').then(msg => msg.delete({timeout: 10000}));
  if (!args.join(' ')) return message.channel.send('Usage: poll <text>').then(msg => msg.delete({timeout: 10000}));
    const voteslog = bot.channels.get('463227818495442956')
  let votelog = new Discord.RichEmbed()
  .setTitle(`Voting at ${message.guild.name}`)
  .setDescription(`**User ID**: ${message.author.id}\n**User Tag**: ${message.author.tag}\n**Voting about**: \n\n\`\`${args.join(' ')}\`\``)
  .setColor('#24ff00')
  .setTimestamp()
  const embed = new Discord.RichEmbed()
  .setTitle('Voting')
    .setDescription(args.join(' '))
    .setFooter('Vote now!')
    .setTimestamp()
    .setColor('RANDOM')
    const pollTitle = await message.channel.send({ embed });
    voteslog.send(votelog)
      await pollTitle.react(`👍`);
      await pollTitle.react(`👎`);
  await pollTitle.react(`🤷`)
  
    const filter = (reaction) => reaction.emoji.name === '👍';
    const collector = pollTitle.createReactionCollector(filter, { time: 15000 });
      collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
      collector.on('end', collected => console.log(`Collected ${collected.size} items`));
  
    const filter1 = (reaction) => reaction.emoji.name === '👎';
    const collector1 = pollTitle.createReactionCollector(filter1, { time: 15000 });
      collector1.on('collect', r => console.log(`Collected ${r.emoji.name}`));
      collector1.on('end', collected => console.log(`Collected ${collected.size} items`));
  
      const filter2 = (reaction) => reaction.emoji.name === '🤷';
    const collector2 = pollTitle.createReactionCollector(filter2, { time: 15000 });
      collector2.on('collect', r => console.log(`Collected ${r.emoji.name}`));
      collector2.on('end', collected => console.log(`Collected ${collected.size} items`));
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on poll commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Moderators"
};

exports.help = {
  name: 'poll',
  category: 'Mod',
  description: 'Description coming soon',
  usage: 'poll <text>'
};