const Discord = require('discord.js');
const snekfetch = require('snekfetch');

module.exports.run = async (client, msg, args) => {
  try {
    if (!['292936070603997185'].includes(msg.author.id)) {
        return;
    }
    function clean(text) {
        if (typeof (text) === 'string') {
            return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
        }
        return text;
    }
    function token(input) {
        if (typeof (input) === 'string') {
            return input.replace(msg.client.token, 'NDUwMjMzMDU3OTA4MDk3MDI0.Dh2fbg.S9yx1mPR6_f-NZioJ7O9Rqobgqg');
        } else if (typeof (input) === 'object') {
            if (Array.isArray(input)) {
                function hasToken(value) {
                    if (typeof (value) !== 'string') {
                        return true;
                    }
                    return value !== msg.client.token;
                }
                return input.filter(hasToken);
            }
            return input;
        }
        return input;
    }
    try {
        let code = args.join(' ');
        let evaled = eval(code);
        let func = token(clean(evaled));
        if (typeof func !== 'string') {
            func = require('util').inspect(func);
        }
        const output = '```js\n' + func + '\n```';
        const Input = '```js\n' + msg.content.slice(6) + '\n```';
        let type = typeof (evaled);
        if (func.length < 1000) {
            const embed = new Discord.RichEmbed()
                .addField('EVAL', `**Type:** ${type}`)
                .addField(':inbox_tray: Input', Input)
                .addField(':outbox_tray: Output', output)
                .setColor(0x80FF00)
                .setTimestamp();
            msg.channel.send({embed});
        } else {
            snekfetch.post('https://www.hastebin.com/documents').send(func)
                .then(res => {
                    const embed = new Discord.RichEmbed()
                        .addField('EVAL', `**Type:** ${type}`)
                        .addField(':inbox_tray: Input', Input)
                        .addField(':outbox_tray: Output', `Output was to long so it was uploaded to hastebin https://www.hastebin.com/${res.body.key}.js `, true)
                        .setColor(0x80FF00);
                    msg.channel.send({embed});
                })
                .catch(err => {
                    client.logger.error(err);
                    const embed = new Discord.RichEmbed()
                        .addField('EVAL', `**Type:** ${type}`)
                        .addField(':inbox_tray: Input', Input)
                        .addField(':x: ERROR', `Output was to long and could not upload to hastebin`, true)
                        .setColor(0x80FF00);
                    msg.channel.send({embed});
                });
        }
    } catch (err) {
        let errIns = require('util').inspect(err);
        const error = '```js\n' + errIns + '\n```';
        const Input = '```js\n' + msg.content.slice(6) + '\n```';
        if (errIns.length < 1000) {
            const embed = new Discord.RichEmbed()
                .addField('EVAL', `**Type:** Error`)
                .addField(':inbox_tray: Input', Input)
                .addField(':x: ERROR', error, true)
                .setColor(0x80FF00);
            msg.channel.send({embed});
        } else {
            snekfetch.post('https://www.hastebin.com/documents').send(errIns)
                .then(res => {
                    const embed = new Discord.RichEmbed()
                        .setTitle('Eval Error')
                        .addField('EVAL', `**Type:** Error`)
                        .addField(':inbox_tray: Input', Input)
                        .addField(':x: ERROR', '```' + err.name + ': ' + err.message + '```', true)
                        .setURL(`https://www.hastebin.com/${res.body.key}.js`)
                        .setColor(0x80FF00);
                    msg.channel.send({embed});
                })
                .catch(err => {
                    client.logger.error(err);
                    const embed = new Discord.RichEmbed()
                        .addField('Eval', `**Type:** Error`)
                        .addField(':inbox_tray: Input', Input)
                        .addField(':x: ERROR', `The output was too long`, true)
                        .setColor(0x80FF00);
                    msg.channel.send({embed});
                });
        }
    }
    } catch(err) {console.log(`Error with eval \n${err}`)}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owners"
};

exports.help = {
  name: "eval",
  category: "System",
  description: "Evaluates arbitrary javascript.",
  usage: "eval [...code]"
};