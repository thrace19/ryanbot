const snekfetch = require("snekfetch");
const humanizeduration = require("humanize-duration");
const discord = require('discord.js')

exports.run = async (bot, message, args) => {
  try {
    if (args.length > 0) {
        snekfetch.get("https://skimdb.npmjs.com/registry/" + args[0].toLowerCase()).then((body) => {
          const npmembed = new discord.RichEmbed()
          .setAuthor(`Npm Package`)
          .addField(`Name`, `\`${body.body.name}\``, true)
          .addField(`Author`, `\`${body.body.author.name}\``, true)
          .addField(`Maintainers`, `\`${body.body.maintainers.map((m) => m.name).join(", ")}\``, true)
          .addField(`Description`, `\`${body.body.description}\``, false)
          .addField(`Latest Version`, `\`${body.body["dist-tags"].latest}\``, true)
          .setColor(`GREEN`)
          .addField(`Last Updated`, humanizeduration(Date.now() - new Date(body.body.time[body.body["dist-tags"].latest]).getTime(), {
									round: true,
									largest: 2
								}), true)
          .addField(`Github`, ((body.body.repository) ? body.body.repository.url.replace("git+", "").replace(".git", "").replace("git://", "https://").replace("git@github.com:", "https://github.com/") : "No Repository"), true)
          message.channel.send(npmembed)
        }).catch((error) => {
            if (error.status === 404) return message.channel.send({
                embed: {
                    title: "ERROR!",
                    color: `RED`,
                    description: "An error occured while fetching that npm package"
                }
            })
            console.error("Failed to grab NPM Package.", error.message);
            message.reply("NPM Package **" + args[0] + "** was not found") 
        })
    } else {
        message.channel.send({
				embed: {
					title: "Error!",
					color: `RED`,
					description: "Missing `<name>` argument."
				}
			});
    }
    } catch(err) {
      const errorlogs = bot.channels.get('464424869497536512')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
                  const erroremb = new discord.RichEmbed()
      .setTitle(`Error on npm Commands`)
      .setDescription(`**ERROR**:\n${err}`)
      .setColor(`RED`)
      errorlogs.send(erroremb)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
}

exports.help = {
  name: 'npm',
  category: 'System',
  description: 'Get a npm package information',
  usage: 'npm <name>'
}