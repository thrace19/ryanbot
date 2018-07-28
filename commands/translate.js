const translate = require('google-translate-api');
const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
    const settings = msg.settings = client.getGuildSettings(msg.guild);
  var prefix = settings.prefix
  try {
    let toTrans = msg.content.split(' ').slice(1);
    let language;
    language = toTrans[toTrans.length - 2] === 'to' ? toTrans.slice(toTrans.length - 2, toTrans.length)[1].trim() : undefined;
    if (!language) {
      const invalidargs = new Discord.RichEmbed()
      .setColor(`RED`)
      .setDescription(`Please provide a valid arguments.\n\n__**Example**__\n${prefix}translate Hello to swedish`)
      .setFooter(`This message will be deleted in 10 seconds`)
        return msg.channel.send(invalidargs).then(msg => {
          msg.delete(10000)
        })
    }
    let finalToTrans = toTrans.slice(toTrans.length - toTrans.length, toTrans.length - 2).join(' ');
    translate(finalToTrans, {to: language}).then(res => {
        const embed = new Discord.RichEmbed()
            .setAuthor('RyanBot\'s translator', client.user.displayAvatarURL)
            .setColor(Math.floor((Math.random() * 1600000) + 6))
            .addField('__**Translator**__', `**From:** ${res.from.language.iso}\n\`\`\`${finalToTrans}\`\`\`\n**To: **${language}\n\`\`\`${res.text}\`\`\``);
        msg.channel.send({embed});
    }).catch(err => {
        msg.channel.send({
            embed: {
                description: '❌ We could not find the supplied language.',
                color: 0xE8642B
            }
        });
    });
    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      msg.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on translate commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Users"
}

exports.help = {
  name: 'translate',
  category: 'Util',
  description: 'Translate a message',
  usage: 'translate <text> <language>',
}