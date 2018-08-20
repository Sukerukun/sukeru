const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpcon = bot.user.displayAvatarURL;
    var aide_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`:robot: Voici mes catégories d'aide !`)
    .setDescription(`Voici mes commandes disponible :`)
    .setThumbnail(helpcon)
    .addField(":tools: Modération", "Fais `*mod` pour voir mes commandes de modération !")
    .addField(":no_entry: Admin", "Fais `*admin` pour voir mes commandes d'admin !")
    .setFooter("Menu d'aide - SukeruBot")
    .setTimestamp()
    message.channel.send(aide_embed);
  }

  module.exports.help = {
    name:"help"
  }