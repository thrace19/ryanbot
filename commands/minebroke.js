const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
const currencyFormatter = require('currency-formatter')

exports.run = async (message, client,) => {
  
    // resulting the code...
    let mining = ["rock", "gold", "ruby", "diamond", "coal", "sapphire", "dirt", "dust", "nothing"]
    const result = Math.floor((Math.random() * mining.length))
    
    // ore name
    const rock = 10; // 0
    const gold = 90 // 1
    const ruby = 100; // 2
    const diamond = 140; // 3
    const coal = 50; // 4
    const sapphire = 75; // 5
    const dirt = 5; // 6
    const dust = 2; // 7
    const nothing = 0 // 8
    // cooldown
    const cooldown = 2.16e+7;
    let user = message.author.id // Yah it still same...
    // core
    let mineDaily = await db.fetch(`Minecooldown_${user}`) //member.id should work but doesnt.. so no clue why author ain't either..
    
    db.fetch(`items_${user}_pickaxe`).then(start => {
      if(start === null) {
       message.channel.send(`I can't find pickaxe in your inventory! please buy it!`) 
      }
      else if (mineDaily !== null && cooldown - (Date.now() - mineDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - mineDaily))

        let lastDailyEmbed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag} || Mine Cooldown!`, message.author.displayAvatarURL)
        .setColor(`RANDOM`)
        .setDescription(`**${message.author.tag}** You're too tired to start mining! come back again in **${timeObj.hours}h, ${timeObj.minutes}m, and ${timeObj.seconds}s**!`)
        message.channel.send(lastDailyEmbed)
      
    } else if(`${result}` === "0") {
    
      db.set(`Minecooldown_${user}`, Date.now())
      db.add(`Currency_${user}`, rock).then(r => {
       let rockembed = new Discord.RichEmbed()
       .setDescription(`<@${message.author.id}> Start mining and found **Rock**! That's worth 10 KR`)
       .setColor(`GREEN`)
       message.channel.send(rockembed)
      })
      
    } else if(`${result}` === "1") {
      db.set(`Minecooldown_${user}`, Date.now())
      db.add(`Currency_${user}`, gold).then(r => {
       let gold = new Discord.RichEmbed()
       .setDescription(`<@${message.author.id}> Start mining and found **Gold**! That's worth 90 KR`)
       .setColor(`GREEN`)
       message.channel.send(gold)
      })
    } else if(`${result}` === "2") {
        db.set(`Minecooldown_${user}`, Date.now())
        db.add(`Currency_${user}`, ruby).then(rb => {
          let rubyembed = new Discord.RichEmbed()
          .setDescription(`<@${message.author.id}> Start mining and found **Ruby**! That's worth 100 KR`)
          .setColor(`RED`)
          message.channel.send(rubyembed)
        })
        
    } else if(`${result}` === "3") {
        db.set(`Minecooldown_${user}`, Date.now())
        db.add(`Currency_${user}`, diamond).then(rb => {
          let diamond = new Discord.RichEmbed()
          .setDescription(`<@${message.author.id}> Start mining and found **Diamond**! That's worth 140 KR`)
          .setColor(`RED`)
          message.channel.send(diamond)
      })
        
      } else if(`${result}` === "4") {
        db.set(`Minecooldown_${user}`, Date.now())
        db.add(`Currency_${user}`, coal).then(rb => {
          let coal = new Discord.RichEmbed()
          .setDescription(`<@${message.author.id}> Start mining and found **Coal**! That's worth 50 KR`)
          .setColor(`RED`)
          message.channel.send(coal)
    })
          
  } else if(`${result}` === "5") {
        db.set(`Minecooldown_${user}`, Date.now())
        db.add(`Currency_${user}`, sapphire).then(rb => {
          let saphire = new Discord.RichEmbed()
          .setDescription(`<@${message.author.id}> Start mining and found **sapphire**! That's worth 75 KR`)
          .setColor(`RED`)
          message.channel.send(saphire)
        })
      } else if(`${result}` === "6") {
        db.set(`Minecooldown_${message.author.id}`, Date.now())
        db.add(`Currency_${message.author.id}`, dirt).then(rb => {
          let dirt = new Discord.RichEmbed()
          .setDescription(`<@${message.author.id}> Start mining and found **Dirt**! That's worth 5 KR`)
          .setColor(`RED`)
          message.channel.send(dirt)
        })
    } else if(`${result}` === "7") {
        db.set(`Minecooldown_${user}`, Date.now())
        db.add(`Currency_${user}`, dust).then(rb => {
          let dust = new Discord.RichEmbed()
          .setDescription(`<@${message.author.id}> Start mining and found **Dust**! That's worth 2 KR`)
          .setColor(`RED`)
          message.channel.send(dust)
        })
      } else if(`${result}` === "8") {
        db.set(`Minecooldown_${message.author.id}`, Date.now())
        db.add(`Currency_${message.author.id}`, nothing).then(rb => {
          let nothing = new Discord.RichEmbed()
          .setDescription(`<@${message.author.id}> Start mining and found **Nothing**! That's worth 0 KR`)
          .setColor(`RED`)
          message.channel.send(nothing)
        })
      } 
    } ) .catch((err) => console.log(err))
    // const guild = '449127957848522763'
    //   const errorlogs = client.channels.get("464424869497536512"); 
    //   message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
    //   const erroremb = new Discord.RichEmbed()
    //   .setTitle(`Error on meme Commands`)
    //   .setDescription(`**ERROR**:\n${err}`)
    //   .setColor(`RED`)
    //   errorlogs.send(erroremb)
}

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Admins"
}

module.exports.help = {
  name: "mine",
  category: 'Economy',
  description: 'Description coming soon!',
  usage: 'mine',
}