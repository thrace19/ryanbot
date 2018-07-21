const { inspect } = require("util");
exports.run = async (client, message, [action, key, ...value], level) => { // eslint-disable-line no-unused-vars
  try {

  const settings = message.settings;
  const overrides = client.settings.get(message.guild.id);
  
  // Edit an existing key value
  if (action === "edit") {
    // User must specify a key.
    if (!key) return message.channel.send("Please specify a key to edit");
    // User must specify a key that actually exists!
    if (!settings[key]) return message.channel.send("This key does not exist in the settings");
    // User must specify a value to change.
    if (value.length < 1) return message.channel.send("Please specify a new value");
    // User must specify a different value than the current one.
    if (value.join(" ") === settings[key]) return message.channel.send("This setting already has that value!");
    
    if (!client.settings.has(message.guild.id)) client.settings.set(message.guild.id, {});
    client.settings.setProp(message.guild.id, key, value.join(" "));

    // Confirm everything is fine!
    message.channel.send(`${key} successfully edited to ${value.join(" ")}`);
  } else
  
  // Resets a key to the default value
  if (action === "reset") {
    if (!key) return message.channel.send("Please specify a key to reset.");
    if (!settings[key]) return message.channel.send("This key does not exist in the settings");
    if (!overrides[key]) return message.channel.send("This key does not have an override and is already using defaults.");
    
    // Good demonstration of the custom awaitReply method in `./modules/functions.js` !
    const response = await client.awaitReply(message, `Are you sure you want to reset ${key} to the default value?`);

    if (["y", "yes"].includes(response.toLowerCase())) {
      delete overrides[key];
      client.settings.set(message.guild.id, overrides);
      message.channel.send(`${key} was successfully reset.`);
    } else
    if (["n","no","cancel"].includes(response)) {
      message.channel.send("Action cancelled.");
    }
  } else
  
  if (action === "get") {
    if (!key) return message.channel.send("Please specify a key to view");
    if (!settings[key]) return message.channel.send("This key does not exist in the settings");
    const isDefault = !overrides[key] ? "\nThis is the default global default value." : "";
    message.channel.send(`The value of ${key} is currently ${settings[key]}${isDefault}`);
  } else {
    message.channel.send(inspect(settings), {code: "json"});
  }
    } catch(err) {console.log(`Error with set \n${err}`)}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["setting", "settings", "conf"],
  permLevel: "Administrators"
};

exports.help = {
  name: "set",
  category: "System",
  description: "View or change settings for your server.",
  usage: "set <view/get/edit> <key> <value>"
};