const Discord = require('discord.js')
const snekfetch = require('snekfetch');
const cooldown = new Set();
exports.run = (client, msg, args) => {
  try {
  if (cooldown.has(msg.author.id)) {
  return msg.reply(`This command have a cooldown of 20 **Seconds**`);
}
  cooldown.add(msg.author.id);
  setTimeout(() => {
    cooldown.delete(msg.author.id);
  }, 20000);
  let [title, contents] = args.join(" ").split("|");
  if(!contents) {
    [title, contents] = ["Achievement Get!", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;

  if(title.length > 20 || contents.length > 20) return msg.edit("Max Length: 20 Characters. Soz.").then(msg.delete.bind(msg), 2000);
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
  let mcaembed = new Discord.RichEmbed()
  .setDescription(`${msg.author.tag} Achievement!`)
  .setImage(url)
  msg.channel.send(mcaembed)
  } catch(err) {console.log(`Error with achievement \n${err}`)}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mca", "achv", "minecraftach"],
  permLevel: "Users"
};

exports.help = {
  name: 'achievement',
  category: 'Fun',
  description: 'Send a Minecraft Achievement image to the channel',
  usage: 'achievement Title|Text '
};