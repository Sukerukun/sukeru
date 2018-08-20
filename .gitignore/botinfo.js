const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor("Information du Bot")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField(":capital_abcd:Nom du Bot", bot.user.username, true)
    .addField(":crown:Createur", "Sukeru_kun#0257", true)
    .addField(":fils_cabinet:Nombre de serveurs", bot.guilds.size, true)
    .addField(":calendar:Crée le", bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}