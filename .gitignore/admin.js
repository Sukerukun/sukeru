const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     let admincon = bot.user.displayAvatarURL;
    var admin_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`:no_entry: Voici mes commandes d'Admin !`)
    .setThumbnail(admincon)
    .addField("*addrole <@user> <@role>", "Donne le role au utilisateur")
    .addField("*removerole <@user> <@role>", "Supprime le role des utilisateur")
    .addField("*say <message>", "ecrit a la place du bot !")
    .setFooter("Commande Admin - SukeruBot")
message.channel.send(admin_embed);
}

module.exports.help = {
    name:"admin"
  }