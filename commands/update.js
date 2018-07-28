const db = require('quick.db'),
  Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
  try {

  // Compile Information
  let timestamp = Date.now(),
    entry = args.join(' ');

  // Form Embed
  const embed = new Discord.RichEmbed()
    .setColor(0xffffff)

  // Verify Permission
  if (message.author.id !== '292936070603997185') {

    // Configure Embed
    let missingperm = new Discord.RichEmbed()
    .setFooter('You do not have permission to perform this action.');

    // Return & Send Embed
    return message.channel.send(missingperm);

  }

  // Verify Input
  if (!entry) { // This will run if no text is given

    // Configure Embed
    let configureemb = new Discord.RichEmbed()
    .setFooter(`Please input text following the command.`);

    // Return & Send Embed
    return message.channel.send(configureemb);

  }

  // Push To Database
  await db.push('changelog', {
    entry: entry,
    timestamp: timestamp
  });

  // Configure Embed
  let succesemb = new Discord.RichEmbed()
  .setDescription('Creating Changelogs entry...')

  // Send Embed
  message.channel.send(succesemb);
    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on update commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Owners"
};

exports.help = {
  name: 'update',
  category: 'Util',
  description: 'update the changelogs',
  usage: 'update <text>'
};