const Discord = require("discord.js");

const client = new Discord.Client({disableEveryone: true});

client.on('ready', () => {
    
        console.log(`Logged in as ${client.user.username}, ready to get this bread.`);
        client.user.setActivity('Testing stuff');
    
    });
    
client.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '-';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}start`){
for (var i = 0; i < 10000000000000000; i++) {
message.channel.send('pls pm')
message.channel.send('d');
await sleep(2000)
message.channel.send('pls beg');
await sleep(2000)
message.channel.send('pls search')
await sleep(2000)
message.channel.send('dresser');
await sleep(2000)
message.channel.send('pls use candy');
await sleep(29000)
message.channel.send('pls search')
await sleep(2000)
message.channel.send('dresser');
await sleep(10000)
message.channel.send('pls beg');
await sleep(20000)
}
}
});
 
client.login(process.env.token)
