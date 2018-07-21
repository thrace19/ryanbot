const Discord = require('discord.js')

exports.run = (client, message, args) => {
  message.delete()
  
   let image = new Discord.RichEmbed()
.setImage(`https://cdn.discordapp.com/attachments/421620705570979843/467907566371078155/coollogo_com-20877256.png`)
 .setColor(`#c9741b`)
  
 let rule1 = new Discord.RichEmbed()
 .setTitle(`Rule 1 > NSFW`)
 .setDescription(`Don't post NSFW content in any channel!. This includes Gore/Porn/Nudity, etc.`)
 .setColor(`#c9741b`)
  
  let rule2 = new Discord.RichEmbed()
 .setTitle(`Rule 2 > Spamming`)
 .setDescription(`Don't spamming in any channel. Except <#449132526179450880>. This includes character repetition/Mass mention, etc.`)
 .setColor(`#c9741b`)
  
   let rule3 = new Discord.RichEmbed()
 .setTitle(`Rule 3 > Advertising`)
 .setDescription(`You're not allowed to post links outside <#449132501299101696> Channels. This includes PM/DM Advertising`)
 .setColor(`#c9741b`)
   
    let rule4 = new Discord.RichEmbed()
 .setTitle(`Rule 4 > Nicknames`)
 .setDescription(`Nicknames must be able to be mentionable. This includes prohibited Nicknames/Links, etc. (*Special Character Names will be changed by Staff.*)`)
 .setColor(`#c9741b`)
    
     let rule5 = new Discord.RichEmbed()
 .setTitle(`Rule 5 > Pinging/mentioning.`)
 .setDescription(`Don't mention a specific user nor Staff member for help, please understand that the Staff members aren't getting paid for their support. Please be patient for a reply.`)
 .setColor(`#c9741b`)
     
      let rule6 = new Discord.RichEmbed()
 .setTitle(`Rule 6 > Account`)
 .setDescription(`Don't joining this server using alt to evade your punishments. If you're caught both accounts will be banned.`)
 .setColor(`#c9741b`)
 
      let rule7 = new Discord.RichEmbed()
 .setTitle(`Rule 7 > Behaviour`)
 .setDescription(`This includes any form of passive-aggressive behavior, or targeting specific members that you dislike. Even jokes that can be misconstrued as toxic will be punished, so if you like to joke around by being toxic, then find another community to do it in`)
 .setColor(`#c9741b`)
            
      let rule8 = new Discord.RichEmbed()
 .setTitle(`Rule 8 > Language`)
 .setDescription(`Do not speaking other languages. This should be taken in PM/DM.`)
 .setColor(`#c9741b`)
      
    let note = new Discord.RichEmbed()
 .setTitle(`NOTE!`)
 .setDescription(`• If your behaviour is not deemed "Appropriate" for this server, Staff have the ability to enforce a kick/ban even if does not line up with the setout rules.\n• All rules apply to all Voice Channels, Text channels and User DM's`)
 .setColor(`#c9741b`)
    
  message.channel.send(image)
  message.channel.send(rule1)
  message.channel.send(rule2)
  message.channel.send(rule3)
  message.channel.send(rule4)
  message.channel.send(rule5)
  message.channel.send(rule6)
  message.channel.send(rule7)
  message.channel.send(rule8)
  message.channel.send(note)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owners"
};

exports.help = {
  name: 'rules',
  category: 'None',
  description: 'Make copy of your previous text',
  usage: 'say [text]'
};