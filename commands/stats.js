const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const Discord = require("discord.js")
let os = require('os')
let cpuStat = require("cpu-stat")
var prettyMs = require('pretty-ms');
var oss = require('os-utils');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
      const cmdFiles = await readdir("./commands/");
    let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
    }
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  let bicon = client.user.displayAvatarURL;
  const RynEmb = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.displayAvatarURL)
  .setDescription("This is a RyanBot Statistic. You can invite the bot [here](https://discordapp.com/api/oauth2/authorize?client_id=450233057908097024&permissions=8&scope=bot)")
  .setTimestamp()
  .setThumbnail(bicon)
  .setColor("RANDOM")
  .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
  .addField(":floppy_disk: Memory usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,true)
  .addField(":minidisc: CPU usage", `\`${percent.toFixed(2)}%\``,true)
  .addField("CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
  .addField(":computer: System", `\`${os.arch()}\``,true)
  .addField(":desktop: Platform", `\`\`${os.platform()}\`\``,true)
  .addField("👥 Users", `${client.users.size.toLocaleString()}`,true)
  .addField("<:Servers:462487903797510144> Servers", `${client.guilds.size.toLocaleString()}`,true)
  .addField("Channels", `${client.channels.size.toLocaleString()}`,true)
  .addField("Commands Count", "`\`70`\`",true)
  .addField("<:jslogo:462488012681642004> Library", `\`Discord.js\``,true)
  .addField("<:jslogo:462488012681642004> Library Version", `v${version}`,true)
  .addField(":book: Node Version", `${process.version}`,true)
  .addField(":stopwatch: Uptime & Ping", `${duration} / ${Math.round(client.ping)}ms`,true)
  //.addField(":stopwatch: Server uptime", `${prettyMs(oss.sysUptime())}`, true)
  .addField(":calendar_spiral: Created On", client.user.createdAt,true)
  message.channel.send(RynEmb)
  });
    } catch(err) {
      const errorlogs = client.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on stats commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,   
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: "stats",
  category: "Util",
  description: "Gives some useful bot statistics",
  usage: "stats"
};