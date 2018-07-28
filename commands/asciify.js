const figlet = require('figlet');
const cooldown = new Set()
const Discord = require('discord.js')

exports.run = (client, message, args, tools) => {
  try {
        if (cooldown.has(message.author.id)) {
    let cooldownemb = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
    .setDescription(`You need to wait 10 seconds!`)
    .setColor(`RED`)
    .setFooter(`This message will be deleted in 10 seconds..`)
    return message.channel.send(cooldownemb).then(msg => {
     msg.delete(10000) 
    })
    
    }
    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
    
  var maxLen = 10 // You can modify the max characters here
  
  if(args.join(' ').length > maxLen) return message.channel.send('Only 10 characters allowned!') 
  
  if(!args[0]) return message.channel.send('Please specify a text to asciify!');
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('Oops...Seems like we have problem here.');
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });

    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on asciify commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ascii", "acy"],
  permLevel: "Users"
};

exports.help = {
	name: 'asciify',
  category: 'Util',
  description: 'Turn message into ascii',
	usage: 'asciify <text>'
}