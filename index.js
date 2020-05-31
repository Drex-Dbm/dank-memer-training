const Discord = require('discord.js');

const client = new Discord.Client();
const BOT_TOKEN = "NzE1ODI5NTI5ODM4NjE2NTk2.XtC9bw.xmLYTcYE0NAWC_xDFGDVR8wKSS8"
 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(BOT_TOKEN);//BOT_TOKEN is the Client Secret
