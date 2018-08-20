const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //*8ball <questions>
  if(!args[5]) return message.reply("S'il te plait, pose une question complète!")
  let replies = ["Oui.", "Non", "Je ne sais pas", "demander à nouveau plus tard"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#ffa500")
  .addField("Question", question)
  .addField("Réponse", replies[result]);

  message.channel.send(ballembed);
}

module.exports.help = {
    name: "8ball"
}