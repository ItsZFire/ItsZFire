const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Invite = message.guild.channels.first().createInvite()
    let Owner = message.author;
    if(Owner.id !== "390301501165404165") return message.reply(":x: **Only the bot owner can use this command!**")

    const id = args.shift();
    const sayMessage = args.join(" ")
    if(!sayMessage) return message.reply("Usage `z!answer ID  your message`")


   let contact = new Discord.RichEmbed()
   .setAuthor(Owner.username, Owner.avatarURL)
   .setColor("00ff00")
   .setThumbnail(Owner.displayAvatarURL)
   .setTitle(":computer: Response  from your contact!")
   .addField(":incoming_envelope: Response :", sayMessage)
   .setFooter("Support Server  - (https://discord.gg/Jf6yXkV)")
   .setTimestamp()

    bot.users.get(id).send(contact);

    let chanemb = new Discord.RichEmbed()
    .setAuthor(Owner.username, Owner.avatarURL)
    .setColor("#f45342")
    .setDescription(`:pencil: Message sent to <@${id}>`)
    .setTimestamp()

    message.channel.send(chanemb).then(msg => {msg.delete(5000)});

        message.delete();


      }
      module.exports.help = {
        name: "answer",
        description: 'Owner Only',
        usage: 'answer <ID> <message>'
      }
