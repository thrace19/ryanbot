const sf = require('snekfetch');
const discord = require('discord.js');
const cooldown = new Set();
exports.run = async (bot, msg, args) => {
  try {
  if (cooldown.has(msg.author.id)) {
    let cooldownemb = new discord.RichEmbed()
    .setAuthor(`${msg.author.username} Cooldown..`, msg.author.displayAvatarURL)
    .setDescription(`You need to wait 5 minutes!`)
    .setColor(`RED`)
    .setFooter(`This message will be deleted in 5 minutes..`)
    return msg.channel.send(cooldownemb).then(msg => {
     msg.delete(5000) 
    })
    
    }
    cooldown.add(msg.author.id);

    setTimeout(() => {
        cooldown.delete(msg.author.id);
    }, 5000);
        if (!args[0] || !args[1] || !args[0] || !args.join().includes('"')) {
            return msg.channel.send('Please give at least 2 options and a title.');
        }
        let title = args.join(' ').split('"')[1];
        if (args.slice(title.split(' ').length).join(' ').split(',').length < 2) {
            return msg.channel.send('Please give at least 2 options');
        }
        let poll = await sf.post('https://strawpoll.me/api/v2/polls').send({
            title,
            options: args.slice(title.split(' ').length).join(' ').split(','),
            multi: true
        });
        msg.delete();
        const embed = new discord.RichEmbed()
            .setTitle('Strawpoll | \'' + title + '\'')
            .setDescription(`[Click here for the strawpoll](http://strawpoll.me/${poll.body.id})`)
            .setColor('#eacd10')
            .addField('Strawpoll created from:', msg.author.tag)
            .addField('Choices:', poll.body.options.join('\n'));

        msg.channel.send({embed});
    } catch(err) {console.log(`Error with strawpoll \n${err}`)}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["stpoll"],
  permlevel: "Moderators"
}

exports.help = {
  name: 'strawpoll',
    category: 'Util',
    usage: 'strawpoll <title> <option 1,2>',
    description: 'Creates a strawpoll',
}
