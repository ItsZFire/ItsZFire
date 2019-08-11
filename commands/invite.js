const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let bname = bot.user.username;
  let inviteembed = new Discord.RichEmbed()
  .setColor("#4286f4")
  .setAuthor(bname, bicon)
  .setURL("")
  .setDescription("<:OOFthumbsup:452254913427275777> **Want to invite ItsZFire?, Just click at up there!**")
  .setTitle(":arrow_right: Click here to invite ItsZFire in to your server! <:plus_1:557908827840970773>")
  .setFooter("Made by ItsZFire","")
  .setTimestamp();

  message.channel.send(inviteembed);
}

module.exports.help = {
  name: "invite"
}
