const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '609383286036365362') return message.reply(":x: **Only the bot owner can use this command!**")
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        let embed = new Discord.RichEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL)
        .setColor(`ff3320`)
        .addField(":inbox_tray: Input:", `\`\`\`js\n${codein}\`\`\``)
        .addField(":outbox_tray: Output:", `\`\`\`js\n${code}\n\`\`\``)
        .setTimestamp()
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}

module.exports.help = {
  name: "eval"
}
