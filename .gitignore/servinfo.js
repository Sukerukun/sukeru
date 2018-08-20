const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let servembed = new Discord.RichEmbed()
    .setDescription("Information sur le Serveur")
    .setColor("#ff0000")
    .setThumbnail(sicon)
    .addField(":capital_abcd:Nom du Serveur", message.guild.name, true)
    .addField(":crown:Propriétaire", message.guild.owner.user.tag, true)
    .addField(":globe_with_meridians:Région:", `${message.guild.region}`, true)
    .addField(":family:Nombre de Membres", message.guild.memberCount, true)
    .addField(":man:Humains", message.guild.members.filter(member => !member.user.bot).size, true)
    .addField(":robot:Bots", message.guild.members.filter(member => member.user.bot).size, true)
    .addField(":restroom:Nombre de rôles", message.guild.roles.size, true)
    .addField(":open_file_folder:Channel", message.guild.channels.size, true)
    .addField(":calendar:Crée le", message.guild.createdAt)
    .addField("Rejoint le", message.member.joinedAt)
    .setFooter("SukeruBot | Développer par Sukeru_kun")

    message.channel.send(servembed);
}

module.exports.help = {
  name:"servinfo"
}