    // This episode will go over Invite Leaderboards, sorted.
const Discord = require('discord.js') // This will be used for creating embed
const arraySort = require('array-sort') // This will be used for sorting arrays
const table = require('table') // This will be used for preparing the output to a table
const send = require('quick.hook') // This will be used for creating & sending webhooks

exports.run = async (client, message, args, tools) => {
  try {
    // Be sure to call this in async, as we will be fetching the invites of the guild

    // First, we need to fetch the invites
    let invites = await message.guild.fetchInvites().catch(error => { // This will store all of the invites into the variable
        // If an error is catched, it will run this...
        return message.channel.send('I dont have permission to view invites!');
    }) // This will store all of the invites into the variable

    // Next, we can turn invites into an array
    invites = invites.array();

    // Now, using arraySort, we can sort the array by 'uses'
    arraySort(invites, 'uses', { reverse: true }); // Be sure to enable 'reverse'

    // Next, we need to go through each invite on the server, to format it for a table
    let possibleInvites = [['User', 'Uses']]; // Each array object is a rown in the array, we can start up by setting the header as 'User' & 'Uses'
    invites.forEach(function(invite) {
        possibleInvites.push([invite.inviter.username, invite.uses]); // This will then push 2 items into another row
    })

    // Create the output embed
    const embed = new Discord.RichEmbed()
        .setColor(0xCB5A5E)
        .addField('Leaderboard', `\`\`\`${table.table(possibleInvites)}\`\`\``) // This will be the field holding the leaderboard
    .setFooter('if it broken use .bugreport')
    .setTimestamp()
    message.channel.send({embed})
        // Be sure to put the table in a codeblock for proper formatting
    } catch(err) {console.log(`Error with inviteleaderboard \n${err}`)}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["il"],
  permLevel: "Users"
};

exports.help = {
  name: 'inviteleaderboard',
  category: 'Util',
  description: 'Show Invite leader of this server!',
  usage: 'inviteleaderboard'
}