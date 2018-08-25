const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
let purple = botconfig.purple;

function changing_status() {
  let status = ['|*help|', 'Sukeru_kun#0257', 'https://discord.gg/EXNmUw9']
  let random = status[Math.floor(Math.random() * status.length)]
  bot.user.setActivity(random)
}

bot.on("ready", () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  setInterval(changing_status, 9000);
})

//Continue with code!


//Side Notes
//9000 is 9 seconds.


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("guildMemberAdd", async member => {
  const bvn = member.guild.channels.find(m => m.name === "welcome-bye")
  if(!bvn) return;
  const embed = new Discord.RichEmbed()
  .setColor("#ff00cb")
  .setAuthor(member.user.tag, member.user.avatarURL)
  .setTitle("Arrivé d'un nouvel utilisateur")
  .addField("un nouvel utilisateur vient de d'arriver", `Il s'agit de [${member.user.tag}]`, true)
  .setDescription("J'espère que tu t'y plairas")
  .addField("Ma commande est `*help`", "Si tu souchaite savoir des information")
  .addField(`Nombre de membres aprés l'arrivée de __${member.user.tag}__`, member.guild.memberCount)
  .setFooter(`ID : ${member.user.id}`)
  .setTimestamp()
  bvn.send(embed)
});

bot.on("guildMemberRemove", async member => {
  const bvn = member.guild.channels.find(m => m.name === "welcome-bye")
  if(!bvn) return;
  const embed = new Discord.RichEmbed()
  .setColor("#ff00cb")
  .setAuthor(member.user.tag, member.user.avatarURL)
  .setTitle("Départ d'un nouvel utilisateur")
  .addField("un nouvel utilisateur vient de quitter", `Il s'agit de [${member.user.tag}]`, true)
  .addField(`Nombre de membres aprés départ de __${member.user.tag}__`, member.guild.memberCount)
  .setFooter(`ID : ${member.user.id}`)
  .setTimestamp()
  bvn.send(embed)
});

bot.on("guildMemberAdd", member => {
  const bvn2 = member.guild.channels.find(m => m.name === "welcome-bye")
  if(!bvn2) return;
  bvn2.send(`Bienvenue ${member}, n'oublie pas de lire le règlement.`)
});

bot.on("channelCreate", async channel => {

  console.log(`${channel} a été crée`);

  let sChanel = channel.guild.channels.find(`name`, "log");
  sChanel.send(`Channel ${channel} a été crée`);
});

bot.on("channelDelete", async channel => {
  console.log(`${channel} a été supprimer`);

  let sChanel = channel.guild.channels.find(`name`, "log");
  sChanel.send(`Channel **${channel}** a été supprimer`);
});



bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(MAJOR.MINOR.PATCH);
