const Discord = require('discord.js');

const client = new Discord.Client();
const BOT_TOKEN = "y57W42jja_CTalANj8F4yTMFn-TDFd5b"
 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
