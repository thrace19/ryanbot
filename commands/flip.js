const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>¿@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
// Start with the character '!'
const OFFSET = '!'.charCodeAt(0);

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
  if (args.length < 1) {
    message.channel.send('You must provide text to flip.');
}

message.channel.send(
    args.join(' ').split('')
        .map(c => c.charCodeAt(0) - OFFSET)
        .map(c => mapping[c] || ' ')
        .reverse().join('')
);
    } catch(err) {console.log(`Error with flip \n${err}`)}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Users"
};

exports.help = {
  name: "flip",
  category: "Fun",
  description: "Flips your text.",
  usage: "flip [text]"
};