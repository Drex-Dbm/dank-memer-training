const Discord = require('discord.js');

const client = new Discord.Client();
const BOT_TOKEN = "Njk3NjY4NzAxMjM4ODUzNjcy.XtOOaQ.E_bQ-8AyLSK2fQ0eChEnhSvU_QU"
 

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
