const figlet = require('figlet');

exports.run = (client, message, args, tools) => {
  try {
  
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

  } catch(err) {console.log(`Error with asciify \n${err}`)}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
	name: 'asciify',
  category: 'Util',
  description: 'Turn message into ascii',
	usage: 'asciify <text>'
}