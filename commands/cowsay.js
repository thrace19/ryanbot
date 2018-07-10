const cowsay = require('cowsay');

const cooldown = new Set();
exports.run = (client, message, args) => {
  try {
  /*
  Checks if author is inside the cooldown list
  */
    if (cooldown.has(message.author.id && message.guild.id)) {
        return message.reply(`This command have a cooldown of 5 **Seconds**`);
    }
    /*
      Command's cooldown due to spam issues
    */
    cooldown.add(message.author.id && message.guild.id);
    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 5000);

    /*
      Checks if txt was supplied
    */

    let txt = message.content.split(' ').slice(1).join(' ');
    if (!txt) {
        return message.reply('Invalid arguments, what do you want the cow to say?');
    }
    /*
      Use the module to generate the cow plus
      the text and then send it to the author's DMs
    */
    message.channel.send(cowsay.say({
        text: txt,
        e: 'oO'
    }), {code: 'css'});
    } catch(err) {console.log(`Error with cowsay \n${err}`)}
};
  

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
}

exports.help = {
  name: 'cowsay',
  category: 'Fun',
  description: 'Make the cow say',
  usage: 'cowsay <text>',
}