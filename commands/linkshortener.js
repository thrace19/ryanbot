const shorten = require('isgd');
 
exports.run = (client, message, args, tools) => {
  try {
 
  if (!args[0]) return message.channel.send('invalid usage! use .shorten <url> [title]')
 
  if (!args[1]) { 
   
    shorten.shorten(args[0], function(res) { 
      if (res.startsWith('Error:')) return message.channel.send('**Please enter a valid URL**'); 
     
      message.channel.send(`**<${res}>**`);
   
    })
   
  } else { 
   
    shorten.custom(args[0], args[1], function(res) { 
      if (res.startsWith('Error:')) return message.channel.send(`**${res}**`);
     
      message.channel.send(`**<${res}>**`);
     
     
    })
   
  }
 } catch(err) {console.log(`Error with linkshortener \n${err}`)}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: 'shorten',
  category: 'Misc',
  description: 'Make link you put into short link',
  usage: 'shorten <url>'
}