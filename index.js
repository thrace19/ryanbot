const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const settings = require('./settings.json');
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const moment = require('moment');
let purple = botconfig.purple;
require('./util/eventLoader');
let cooldown = new Set();
let cdseconds = 5;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

//Some usefull things
bot.log = require('./runtime/log.js');
bot.on('guildMemberAdd', member => require('./events/guildMemberAdd.js')(bot, member));

//core for all the commands for this bot
fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    let eventFunc = require(`./events/${file}`);
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

  function status(){
    let status = [
        `TEXT`,
        `TEXT`,
        `TEXT`
    ]
    let rstatus = Math.floor(Math.random() * status.length);
    bot.user.setActivity(status[rstatus], {type:"PLAYING"})
}; setInterval(status, 12000)

const id = '446886047511740416';
bot.on("ready", () => {
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
});

bot.on("guildCreate", guild => {
  let channel = bot.channels.get("Channel ID")
  let sicon = guild.iconURL;
  let crtEmb = new Discord.RichEmbed()
  .setTitle(`:white_check_mark: Joined ${guild.name}`)
  .setColor("RANDOM")
  .setThumbnail(sicon)
  .addField("Owner", guild.owner)
  .addField("ID", guild.id)
  .addField("Channels", guild.channels.size)
  .addField("Members", guild.memberCount)
  .setTimestamp()
channel.send(crtEmb)
})

bot.on("guildDelete", guild => {
  let channel = bot.channels.get("Channel ID")
  let sicon = guild.iconURL;
  let delEmb = new Discord.RichEmbed()
  .setTitle(`:x: Leaving ${guild.name}`)
  .setColor("RANDOM")
  .setThumbnail(sicon)
  .addField("Owner", guild.owner)
  .addField("ID", guild.id)
  .addField("Channels", guild.channels.size)
  .addField("Members", guild.memberCount)
  .setTimestamp()
channel.send(delEmb)
})

bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  let prefix = prefixes[message.guild.id].prefixes;
  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("To avoid the client flooded. You have to wait 5 seconds to use this commands again!")
  }
  if(!message.member.hasPermission("MANAGE_MESSAGES")){
    cooldown.add(message.author.id);
  }


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)

});

bot.login(settings.token);
