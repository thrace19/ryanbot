const ms = require('ms');
const Discord = require('discord.js')

exports.run = (client, message, args, tools) => {
    const settings = message.settings = client.getGuildSettings(message.guild);
  var prefix = settings.prefix
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Sorry, you don\'t have permission to lockdown or unlock!')
        .then(msg => msg.delete({
            timeout: 10000
        }));
    if (!client.lockit) client.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'unlock']
    let timeemb = new Discord.RichEmbed()
    .setDescription(`You must set a duration for the lockdown in either hour(s), minute(s) or second(s)\nExample: **${prefix}lockdown 1h**`)
    .setColor(`GREEN`)
    if (!time) return message.channel.send(timeemb).then(msg => {
      msg.delete(10000)
    })

    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: null
            })
            .then(() => {
                let liftedemb = new Discord.RichEmbed()
                .setDescription(`Lockdown lifted...`)
                .setColor(`RED`)
                .setTimestamp()
                message.channel.send(liftedemb)
                clearTimeout(client.lockit[message.channel.id]);
                delete client.lockit[message.channel.id];
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: false
            })
            .then(() => {
          let successemb = new Discord.RichEmbed()
          .setDescription(`Channel Locked down for **${ms(ms(time), { long:true })}**`)
          .setColor(`GREEN`)
                message.channel.send(successemb)
                    .then(() => {

                        client.lockit[message.channel.id] = setTimeout(() => {
                            message.channel.overwritePermissions(message.guild.id, {
                                    SEND_MESSAGES: null
                                })
                                .then(message.channel.send('Lockdown lifted. Everyone can chat now..'))
                                .catch(console.error);
                            delete client.lockit[message.channel.id];
                        }, ms(time));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            });
    }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ld', 'lc'],
  permLevel: "Administrators"
};

exports.help = {
  name: 'lockdown',
  category: 'Admin',
  description: 'Lock the channel for specific time.',
  usage: 'lockdown <duration>'
}