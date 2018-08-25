const Discord = require("discord.js");
const ms = require("ms");
const botconfig = require("../config.js");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;
const send = require(`quick.hook`)

module.exports.run = async (bot, message, args) => {
  try {
              const settings = message.settings = bot.getGuildSettings(message.guild);
        var modLog = settings.modlogChannel
        var mutedRole = settings.mutedRole
        var prefix = settings.prefix


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Not Enough permission to do this!");
  if(args[0] == "1251623"){
    message.reply("Invalid syntax! use .help tempmute");
    return;
  }
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them! He/she has MANAGE_MESSAGES permissions");
  let reason = args.slice(2).join(" ");

  let muterole = message.guild.roles.find(`name`, `${mutedRole}`);
    const muterole0 = new Discord.RichEmbed()
    .setDescription(`Muted role not found! please create one or assign it by using **${prefix}set edit mutedRole <mutedRole>**`)
    .setColor(`RED`)
  if(!muterole) return message.channel.send(muterole0)
  let mutetime = args[1];
    const mutetimeembed = new Discord.RichEmbed()
    .setDescription(`Please specify a time!\n**EXAMPLE**: \n${prefix}tempmute <@user> <time> [reason]`)
    .setColor(`RED`)
  if(!mutetime) return message.channel.send(mutetimeembed);

  try{
    const tomuteuser = new Discord.RichEmbed()
    .setDescription(`Hello, ${message.user.username}!\n\nYou have been muted for ${mutetime}\nReason: ${reason}\nMuted by ${message.author}`)
    .setColor(`RED`)
    await tomute.send(tomuteuser)
  }catch(e){
    const dmlocked = new Discord.RichEmbed()
    .setDescription(`${tomute} has been muted... but their DMs are locked. They will be muted for **${mutetime}**`)
    .setColor(`GREEN`)
    message.channel.send(dmlocked)
  }

  let muteembed = new Discord.RichEmbed()
  .setColor(`GREEN`)
  .addField("Muted User", tomute, true)
  .addField("Muted in", message.channel, true)
  .addField("Length", mutetime, true)
  .addField("Reason", reason || `Tempmute by ${message.author}: No reason...`, true)
  .addField("Time", message.createdAt, true)
  .setThumbnail(tomute.user.displayAvatarURL)

  let incidentschannel = message.guild.channels.find(`name`, `${modLog}`);
  if(!incidentschannel) return message.reply("Please create a mod-log channel first!");
    send(incidentschannel, muteembed, {
     name: 'Action - Tempmute',
      icon: 'https://cdn3.iconfinder.com/data/icons/chat-sign/50/7-512.png'
    })

  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    const unmutedembed = new Discord.RichEmbed()
    .setDescription(`${tomute} has been unmuted!`)
    .setColor(`GREEN`)
    message.channel.send(unmutedembed);
    message.channel.send(`${tomute}`).then(message => {
     message.delete(1000) 
    })
  }, ms(mutetime));


//end of module
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
            const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on tempmute Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Moderators"
};

exports.help = {
  name: 'tempmute',
  category: 'Mod',
  description: 'Mute mentioned person for specific time',
  usage: 'tempmute <mention> <1s/m/h/d> [reason]'
};