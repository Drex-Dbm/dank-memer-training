const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});


client.login(process.env.NzE1ODQ4NjU4NzQ2MzQzNDM0.XtDUXg.e7z1vlDgYmzwcdzuW5VzHoLaEhk);
