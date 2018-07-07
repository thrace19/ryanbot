const sf = require('snekfetch');
const discord = require('discord.js');
const cooldown = new Set();
exports.run = async (bot, msg, args) => {
  try {
      if (cooldown.has(msg.author.id)) {
        return msg.reply('Too fast right there! you need to wait 5 **Seconds** before using this commands again!');
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
    usage: 'strawpoll "title title" <option 1,2> //title must be longer than 2',
    description: 'Creates a strawpoll',
}
