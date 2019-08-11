const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

  const pidor = message.guild.members.get(args[0]) || message.member;


let helpembed = new Discord.RichEmbed()
    .setColor(`00ff00`)
    .setAuthor(`Commands & Guides`, bot.user.avatarURL)
    .addField(`:information_source: Support`, `**z!help** - Show a list of commands & guides to your DM.\n Found some bug?, Use **z!contact** to let us know!\nUse **z!invite** to invite <@609383286036365362> in to your server!`)
    .setFooter("Made By ItsZFire", "https://cdn.discordapp.com/avatars/390301501165404165/0af5081f5d86ac12831dfa4dd008e90b.png")

    pidor.send(helpembed);

let generalembed = new Discord.RichEmbed()
    .setColor(`#4286f4`)
    .addField(`:desktop: General Commands`, `**z!calculate/calc [question]** - Solve the math question.\n**z!icon** - Gives you the server icon\n**z!id [user]** - Show ID of user\n**z!8ball [text]** - Random the answer from the question. \n**z!avatar [user]** - Show the avatar user.\n**z!ping** - Show the current user ping/ms.\n**z!support** - Using for help\n**z!serverinfo** - Shows the information of the guild.\n**z!botinfo** - Shows the information of the bot.\n**z!guilds** - Shows a list of <@609383286036365362> guilds.\n**z!leaderboard** - Shows a list of <@609383286036365362> guilds, from the most members to least.\n**z!userinfo [user]** Shows the information of your.\n**z!uptime** - Showing online time of <@609383286036365362>.\n**z!unicode [text]** - Change text/number to unicode\n**z!weather** - Show the current weather statistics.`)

    pidor.send(generalembed);

let moderatembed = new Discord.RichEmbed()
    .setColor(`#ff3a3a`)
    .addField(`:tools: Moderation Commands`, `**z!clear [amount]** - Clear the given amount of messages.\n**z!report [user]** - report user to a guild\n**z!say [text]** - <@609383286036365362> Will chat with your given text.\n**z!poll [text]** - Vote the message by reaction.`)

    pidor.send(moderatembed);

let funembed = new Discord.RichEmbed()
    .setColor(`#f4b942`)
    .addField(`<:epic:596292541574283274> Fun Commands`, `\n**z!cat** - Give a random image of cat\n**z!dog** - Give a random image of dog.\n**z!reverse [text]** - Type to amount to reverse the message.\n**z!joke** - Send random joke.\n**z!lenny** - Will message ( ͡° ͜ʖ ͡°)\n**z!pepe** - Random pepe image.\n**z!kill [user]** - Or mention to kill him/her or suicide.\n**n!shrug** - ¯\\_\(ツ)\_\/¯ \n**n!clap [text]** - Puts 👏 between👏your👏message.\n**n!megusta** - <@609383286036365362> Will message megusta image.\n**z!morse [text]** - Translate from text to morse code/translate from morse code to text.\n**z!mock [text]** -  Mock some texts.\n**z!flip [text]** - Turn message in to flip text.\n**z!owner [user]** - Make someone to become an owner. (Troll Command)\n**z!yomama** - Give a yo-mama joke.`)

    pidor.send(funembed);

 let musicembed = new Discord.RichEmbed()
    .setColor(`#41c1f4`)
    .addField(`<:headphone:553459778714730527> Music Commands`, `Music Commands is coming soon\nwaiting for ItsZFire will add the commands`)
    .setTimestamp()

  pidor.send(musicembed);

let ownerembed = new Discord.RichEmbed()
    .setColor("#ff6a00")
    .addField(`<:owner:596292514487599105> Owner Commands`, `**z!answer** - Answer from user are contact feedback.\n**z!eval** - Evaluates javascript code.`)

    pidor.send(ownerembed)

let dm = new Discord.RichEmbed()
    .setColor(`#409cd9`)
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(`:mailbox_with_mail: I have private messaged you a list of commands!`)
    .setTimestamp()

    message.channel.send(dm)

}
module.exports.help = {
  name: "help"
}
