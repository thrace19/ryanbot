exports.run = (client, message, args) => {
     let google = args.join(" ");
    let link = `https://www.google.com/search?q=${google}` ;
	message.channel.send(link); 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: "google",
  category: 'Users',
  description: 'Search stuff from google..', 
  usage: "google <text>"
}