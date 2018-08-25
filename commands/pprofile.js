const { Canvas } = require("canvas-constructor"); // You can't make images without this.
const { resolve, join } = require("path"); // This is to get a font file.
const { Attachment, Discord } = require("discord.js"); // This is to send the image via discord.
const { get } = require("snekfetch"); // This is to fetch the user avatar and convert it to a buffer.
// eslint-disable-next-line no-unused-vars
    Canvas.registerFont(resolve(join(__dirname, "./path/to/font/Discord.ttf")), "Discord");
exports.run = async (client, message, args, level) => {
  // Your code here.
  async function profile(member, score) {
    async function createCanvas() {
      const profile = `Profile`
    const imageUrlRegex = /\?size=2048$/g;
const { body: avatar } = await get(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
const name = member.displayName.length > 20 ? member.displayName.substring(0, 17) + "..." : member.displayName;
    return new Canvas(400, 180)
.setColor("#2C2F33")
 .addRect(0, 0, 84, 180)
 .addRect(169, 26, 231, 46) 
.addRect(224, 108, 176, 46)
.setShadowColor("rgba(22, 22, 22, 1)")
.setShadowOffsetY(5)
.setShadowBlur(10)
.save()
.addCircle(84, 90, 62)
.restore()
.addRoundImage(avatar, 20, 26, 128, 128, 64)
.createBeveledClip(20, 138, 128, 32, 5)
.setColor("#23272A") 
.addRect(20, 138, 128, 32)
 .restore()
.setTextAlign("center")
.setTextFont("10pt Kids")
.setColor("#FFFFFF")
.addText("Sharif", 285, 54)
.addText(`Level: 100`, 84, 159)
.setTextAlign("left")
.addText(`Score: 1000`, 241, 136)
.toBuffer()
message.channel.send(profile, {file: new Discord.Attachment(await createCanvas(), 'profile.png')});
}
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owners"
};

exports.help = {
  name: "pprofile",
  category: "economy",
  description: "Display user profile.",
  usage: "profile"
};