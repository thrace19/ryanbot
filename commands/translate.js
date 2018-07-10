const translate = require('google-translate-api');
const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
  try {
    let toTrans = msg.content.split(' ').slice(1);
    let language;
    language = toTrans[toTrans.length - 2] === 'to' ? toTrans.slice(toTrans.length - 2, toTrans.length)[1].trim() : undefined;
    if (!language) {
        return msg.reply(`Please supply valid agruments.\n**Example** \`.translate Ryanbot is my favorite bot to sv\``);
    }
    let finalToTrans = toTrans.slice(toTrans.length - toTrans.length, toTrans.length - 2).join(' ');
    translate(finalToTrans, {to: language}).then(res => {
        const embed = new Discord.RichEmbed()
            .setAuthor('RyanBot\'s translator', client.user.displayAvatarURL)
            .setColor(Math.floor((Math.random() * 1600000) + 6))
            .addField('Translator:', `**From:** ${res.from.language.iso}\n\`\`\`${finalToTrans}\`\`\`\n**To: **${language}\n\`\`\`${res.text}\`\`\``);
        msg.channel.send({embed});
    }).catch(err => {
        msg.channel.send({
            embed: {
                description: '❌ We could not find the supplied language.',
                color: 0xE8642B
            }
        });
    });
    } catch(err) {console.log(`Error with translate \n${err}`)}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
}

exports.help = {
  name: 'translate',
  category: 'Util',
  description: 'Translate a message',
  usage: 'translate <text> <language>',
}