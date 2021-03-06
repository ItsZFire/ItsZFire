const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
    let Sender = message.author;
    const sayMessage = args.join(" ");
    if(!sayMessage) return message.channel.send("**Please give us reason for contact report.**").then(msg => {msg.delete(5000)});

   let contact = new Discord.RichEmbed()
   .setColor("#41c4f4")
   .setThumbnail(Sender.displayAvatarURL)
   .setDescription(`:inbox_tray: Contact message from [${message.guild.name}](${Invite.url})`)
   .setTitle("Message from contact command!")
   .addField("<:bustinsilhouette:553086092837126145> User", Sender, true)
   .addField(":card_index: User ID: ", Sender.id, true)
   .addField(":incoming_envelope: Message: ", sayMessage)
   .setTimestamp()

    bot.users.get("609383286036365362").send(contact);

    let embed = new Discord.RichEmbed()
    .setColor("#f44141")
    .setTitle("Message Sent!")
    .setDescription("Your Contact message has been sent!")
    .addField(":envelope_with_arrow: Reqested by ", Sender)
    .addField(":incoming_envelope: Message: ", sayMessage)
    .setFooter("Thanks you for contacting with the ItsZFire support!")

    message.channel.send(embed);


      }
      module.exports.help = {
        name: "contact"
      }
