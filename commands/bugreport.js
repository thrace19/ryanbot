const superagent = require('superagent');
module.exports.run = async (client, message, args) => {

try {
   function clean(text) {
      if (typeof(text) === 'string')
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
      else
        return text;
    }
    const bug = args.join(" ")
    if (!bug) return message.channel.send('Please specify a bug!')
    const content = clean(`**${message.author.username}**#${message.author.discriminator} ID (${message.author.id}) reported a bug:\n${bug}\nServer: **${message.guild.name}**\nID: **${message.guild.id}**`);
    const id = '446886047511740416';
    new Promise((resolve, reject) => {
      superagent.post(`https://discordapp.com/api/channels/${id}/messages`)
        .set('Authorization', `Bot ${client.token}`).send({ content })
        .end((err, res) => {
          if (err) {
            reject(err);
            message.reply('There was an error while sending your bug report to RyanBot Support Server. Please try again later. If it still failed you can dm RyansHDs#4461');
          } else {
            resolve(res);
            message.channel.send(`:white_check_mark: Your report has been sent to RyanBot Support Server to review! Thank you for report!`);
          }
        });
    });
}  catch (err) {
console.log(err)
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Everyone"
};

exports.help = {
  name: 'bugreport',
  description: 'Report the bug that happend on this bot!',
  usage: 'bugreport <text>'
};