const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Non.");
  if(!args[0]) return message.channel.send("non");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`${args[0]} messages on été supprimer.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}