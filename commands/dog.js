const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://dog.ceo/api/breeds/image/random`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#ffa202")
  .setDescription("<:DogeBlob:556330816137986048> Here's the doggo! <:OhNoDog:527090442467147777>")
  .setImage(body.message);

  message.channel.send(dogembed);

}

module.exports.help = {
  name: "dog"
}
