    module.exports.run = async (bot, message, args) => {
      try {
    var discord = require('discord.js');
    var db = require('quick.db')
    var currencyFormatter = require('currency-formatter')
    let storepaylog = bot.channels.get('463637834243375104')
    // This Code Is Registered To Zinx#9129
    // All This Code Is Original & By Him - Thank You For Using
    // hurr hurr hurr... <3 Zinx#9129
    //thx for the help zinx :) <3 RyansHDs#4461

    db.fetch(`store1`).then(i => {
    let item = { // When adding to the store reminder to always update this otherwise purchases made will basically be null & void.
    "badge": 100,
    "pickaxe": 550,
    }

    let itemchoice = args[0]
    let amount = args[1]
    let cost = args[1]*item[args[0]]
    let buyObj = {
        dataID: {
            UID: `${message.author.id}`,
            Username: `${message.author}`
        },
        itemData: {
            item: `${args[0]}`,
            quantity: 0
        }
    }

    db.fetch(`items_${message.member.id}_${args[0]}`).then(scaninventory => {
    db.fetch(`Currency_${message.member.id}`).then(account => {
    
    if (!args[0]) {
        return message.channel.send(`Please visit the store & choose from our wide selection. Usage: \`.store\``)
    }
    if (!args[1]) {
        return message.channel.send(`When purchasing an item please use a number. Usage: \`.storebuy {badge} {1}\``)
    }
    if (account === null && 0 && undefined) {
        message.channel.send(`${message.member.id}, Your Account ID Was Not Valid.\nSupervisor bank Have Reset Your Funds.`)
        db.set(`Currency_${message.author.id}`, 200)//Lemme just trademark this ;)
        return
    }
    if (args[0] === i.name) {
        return message.channel.send(`When purchasing an item please use lowercase. Usage: \`.storebuy {badge} {1}\``)
    }
    if (!Number(args[1])){
        return message.channel.send(`When purchasing an item please use a number. Usage: \`.storebuy {badge} {1}\``)
    }
    if (!args[1] >= 1) {
        return message.channel.send(`When purchasing an item please use a number. Usage: \`.storebuy {badge} {1}\``)
    }
    if (!args[0] == item) {
        return message.channel.send(`Sorry but this item is either not in stock or non-existed.`) 
    }
    if (!Number(cost)) {
        return message.channel.send(`Not A Valid Number. Please input a valid number.`)
    }
    if (account <= cost) {
        return message.channel.send(`You dont have enough kr to do this!`)
    } else {
        let buyEmbed = new discord.RichEmbed()
        .setAuthor(`Success`, message.author.displayAvatarURL)
        .setThumbnail(`https://www.anime-planet.com/images/characters/military-store-manager-60654.jpg`)
        .setColor(`#40e01b`)//lemme get some hex colour..
        .setFooter(`Payments Made Are Final When Buying`)
        .addField(`You finally made a purchase`, `Buyer: ${message.author}\nItem Purchased: ${args[0]}\nPayment: kr\nQuantity: ${amount}\nPayout: ${currencyFormatter.format(cost, { code: 'SEK' })}`) // Change Details (if u want)
        message.channel.send(buyEmbed)
      storepaylog.send(`${message.author} Purchased **${args[0]}**, Quantity: **${amount}**, For **${currencyFormatter.format(cost, { code: 'SEK' })}**`)
      
        db.fetch(`items_${message.member.id}_${args[0]}`).then(val => {
        if(!Number(val)) {
            db.set(`items_${message.member.id}_${args[0]}`, 0)
            db.set(`items_${message.member.id}_${args[0]}`, parseInt(args[1]))
            return db.subtract(`Currency_${message.member.id}`, cost)
        }
        else {
        
        db.subtract(`Currency_${message.member.id}`, cost)
        db.add(`items_${message.member.id}_${args[0]}`, parseInt(args[1]))}
    })}})})
})
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on storebuy commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sr', 'storebuy', 'shopbuy'],
  permLevel: "Users"
};

exports.help = {
  name: 'buy',
  category: 'Fun',
  description: 'Buy stuff from Store!',
  usage: 'buy <item name> <amount>'
};