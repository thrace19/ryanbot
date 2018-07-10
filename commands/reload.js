exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  try {
  if (!args || args.length < 1) return message.reply("Must provide a command to reload. Derp.");

  let response = await client.unloadCommand(args[0]);
  if (response) return message.reply(`Error Unloading: ${response}`);

  response = client.loadCommand(args[0]);
  if (response) return message.reply(`Error Loading: ${response}`);

  message.reply(`The command \`${args[0]}\` has been reloaded`);
    } catch(err) {console.log(`Error with reload \n${err}`)}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Admins"
};

exports.help = {
  name: "reload",
  category: "System",
  description: "Reloads a command that\"s been modified.",
  usage: "reload [command]"
};