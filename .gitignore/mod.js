const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let modcon = bot.user.displayAvatarURL;
    var mod_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`:tools: Voici mes commandes modérations !`)
    .setThumbnail(modcon)
    .addField("*kick <@user> <reason>", "Kick l'utilisateur !")
    .addField("*ban <@user> <reason>", "Ban l'utilisateur !")
    .addField("*report <@user> <reason>", "Signalé un utilisateur" )
    .addField("*clear nombre", "Supprime le nombre de messages indiqué")
    .addField("*tempmute <@user> <time>", "Mute l'utilisateur mentionné")
    .setFooter("Commande modération - SukeruBot")
    .setTimestamp()
    message.channel.send(mod_embed);
}

module.exports.help = {
    name:"mod"
  }