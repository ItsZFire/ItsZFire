const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let version = `0.1.7a`;
    let bicon = bot.user.displayAvatarURL;
    let bname = bot.user.username;
    let botembed = new Discord.RichEmbed()
    .setColor(`#f4d442`)
    .setThumbnail(bicon)
    .setAuthor(bname, bicon)
    .setURL(``)
    .setTimestamp()
    .setTitle(`Click here to join ItsZFIre discord server`)
    .setDescription("Made with <:nodejs:553212483415048221> Node.js and <:discordjs:553213251488317440> Discord.js\nHosted bot for free by <:heroku:553414334156374016> Heroku")
    .addField(`:clipboard: Created by`, `5831#5831`, true)
    .addField(`:information_source: Version`, `${version}`, true)
    .addField(`:tools: Debug`, `Updated to version ${version}, new commands - Fun Commands!\To invite ItsZFire in to your server! type "z!invite"\nCheck out try z!help in the chat!`)
    .addField(`:robot: Bot Created Date`, bot.user.createdAt)
    .setFooter("Made by ItsZFire","https://cdn.discordapp.com/avatars/390301501165404165/0af5081f5d86ac12831dfa4dd008e90b.png")
    .setTimestamp();

    message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
