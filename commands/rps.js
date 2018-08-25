const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (bot, message, args, color, prefix) => {
  try {
    let amount = 10;
    
  var choice = args[0];
  if (choice == "paper" || choice == "p") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "scissors") {
      var response = "I'm choosing **Scissors**! :v: I win!"
    } else if (choice2 == "paper") {
      var response = "I'm choosing **Paper**! :hand_splayed: It's a tie!"
    } else {
      var response = "I'm choosing **Rock**! :punch: You win!"
    }
    message.channel.send(response);
  } else if (choice == "rock" || choice == "r") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "paper") {
      var response = "I'm choosing **Paper**! :hand_splayed: I win!"
    } else if (choice2 == "rock") {
      var response = "I'm choosing **Rock**! :punch: It's a tie!"
    } else {
      var response = "I'm choosing **Scissors**! :v: You win!"
    }
    message.channel.send(response);
  } else if (choice == "scissors" || choice == "s") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "rock") {
      var response = "I'm choosing **Paper**! :hand_splayed: You win!"
    } else if (choice2 == "scissors") {
      var response = "I'm choosing **Scissors**! :v: It's a tie!"
    } else {
      var response = "I'm choosing **Rock**! :punch: I win!"
    }
    message.channel.send(response);
  } else {
    message.channel.send(`You need to use .rps <rock|paper|scissors>`);
  }
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
            const erroremb = new Discord.RichEmbed()
      .setTitle(`Error on rps Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
	name: "rps",
  category: 'Fun',
	description: 'Play Rock Paper Scissors with bot. If you win you got KR.',
  usage: 'rps <rock|paper|scissors>'
}