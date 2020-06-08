const Discord = require("discord.js");

const client = new Discord.Client();

function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

client.on('ready', async () => {

var server = client.guilds.get("716227489860681738");
var channel = server.channels.get("716227489860681743")

        console.log(`Logged in as ${client.user.username}, ready to get this bread.`);
        for (var i = 0; i < 1000000; i++) {
        channel.send('pls search')
        await sleep(1000)
        channel.send('dresser');
        await sleep(5000)
        channel.send('pls beg')
        await sleep(25100)
        channel.send('pls search');
        await sleep(1000)
        channel.send('dresser');
        await sleep(5000)
        channel.send('pls pm')
        await sleep(1000)
        channel.send('d');
        await sleep(2000)
        channel.send('pls beg')
        await sleep(31000)
        channel.send('pls use candy')
        await sleep(1000)
    

client.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '-';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}start`){
for (var i = 0; i < 10000000000000000; i++) {
channel.send('pls search')
await sleep(1000)
message.channel.send('dresser');
await sleep(5000)
message.channel.send('pls beg')
await sleep(25100)
        message.channel.send('pls search');
        await sleep(1000)
        message.channel.send('dresser');
        await sleep(5000)
        message.channel.send('pls pm')
        await sleep(1000)
        message.channel.send('d');
        await sleep(2000)
        message.channel.send('pls beg')
        await sleep(31000)
        message.channel.send('pls use candy')
        await sleep(1000)
}
}
});

client.login(process.env.token)
