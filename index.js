const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
const client2 = new Discord.Client({disableEveryone: true});
const client3 = new Discord.Client({disableEveryone: true});
const client4 = new Discord.Client({disableEveryone: true});
const client5 = new Discord.Client({disableEveryone: true});
const client6 = new Discord.Client({disableEveryone: true});
const client7 = new Discord.Client({disableEveryone: true});
const client8 = new Discord.Client({disableEveryone: true});
const client9 = new Discord.Client({disableEveryone: true});
const client10 = new Discord.Client({disableEveryone: true});


client.on('ready', () => {
    
        console.log(`Logged in as ${client.user.username}, ready to get this bread.`);
        client.user.setActivity('Testing stuff');
    
    });
    
client2.on('ready', () => {
    
        console.log(`Logged in as ${client2.user.username}, ready to get this bread.`);
        client2.user.setActivity('Testing stuff');
    
    });
    
client3.on('ready', () => {
    
        console.log(`Logged in as ${client3.user.username}, ready to get this bread.`);
        client3.user.setActivity('Testing stuff');
    
    });
	
client4.on('ready', () => {
    
        console.log(`Logged in as ${client4.user.username}, ready to get this bread.`);
        client4.user.setActivity('Testing stuff');
    
    });
		
client5.on('ready', () => {
    
        console.log(`Logged in as ${client5.user.username}, ready to get this bread.`);
        client5.user.setActivity('Testing stuff');
    
    });
	
client6.on('ready', () => {
    
        console.log(`Logged in as ${client6.user.username}, ready to get this bread.`);
        client6.user.setActivity('Testing stuff');
    
    });
	
client7.on('ready', () => {
    
        console.log(`Logged in as ${client7.user.username}, ready to get this bread.`);
        client7.user.setActivity('Testing stuff');
    
    });
	
client8.on('ready', () => {
    
        console.log(`Logged in as ${client8.user.username}, ready to get this bread.`);
        client8.user.setActivity('Testing stuff');
    
    });
	
client9.on('ready', () => {
    
        console.log(`Logged in as ${client9.user.username}, ready to get this bread.`);
        client9.user.setActivity('Testing stuff');
    
    });
	
client10.on('ready', () => {
    
        console.log(`Logged in as ${client10.user.username}, ready to get this bread.`);
        client10.user.setActivity('Testing stuff');
    
    });
	


	function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
client.on('message', async message => { 
    
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        if (!message.content.startsWith(process.env.prefix)) return;
        
        const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    
        let yeetEmbed = ''
        let oops = ''
    
        switch (command) {
            
            case "start1":
    
                let numSaid = parseInt(args[0]);
    
    
                if (!numSaid) {
                    numSaid = 1000000000000000000000000000000;
                    oops = ('started')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid)) {
                    numSaid3 = 1000000000000000000000000000000;
                    oops = ('started');
                    message.channel.send(oops);
                }
    
                console.log(numSaid);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Post Meme Command ${numSaid} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
						message.channel.send('pls pm')
                        await sleep(1000);
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
                    await sleep(0)
                }
    
            break;
			case "laptop":
    
                let numSaid2 = parseInt(args[0]);
    
    
                if (!numSaid2) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, you didn\'t provide an argument, resorting to 10 loops.')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid2)) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, thats not a number, resorting to 10 loops.');
                    message.channel.send(oops);
                }
    
                console.log(numSaid2);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Beg Command ${numSaid2} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
                    message.channel.send('pls buy laptop');
                    await sleep(1000000)
                }
        
            break;
        }
    
    });
 
client2.on('message', async message => { 
    
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        if (!message.content.startsWith(cprocess.env.prefix)) return;
        
        const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    
        let yeetEmbed = ''
        let oops = ''
    
        switch (command) {
            
            case "start2":
    
                let numSaid = parseInt(args[0]);
    
    
                if (!numSaid) {
                    numSaid = 1000000000000000000000000000000;
                    oops = ('started')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid)) {
                    numSaid3 = 1000000000000000000000000000000;
                    oops = ('started');
                    message.channel.send(oops);
                }
    
                console.log(numSaid);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Post Meme Command ${numSaid} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
						message.channel.send('pls pm')
                        await sleep(1000);
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
                    await sleep(0)
                }
    
            break;
			case "laptop2":
    
                let numSaid2 = parseInt(args[0]);
    
    
                if (!numSaid2) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, you didn\'t provide an argument, resorting to 10 loops.')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid2)) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, thats not a number, resorting to 10 loops.');
                    message.channel.send(oops);
                }
    
                console.log(numSaid2);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Beg Command ${numSaid2} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
                    message.channel.send('pls buy laptop');
                    await sleep(1000000)
                }
        
            break;
        }
    
    });

client3.on('message', async message => { 
    
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        if (!message.content.startsWith(process.env.prefix)) return;
        
        const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    
        let yeetEmbed = ''
        let oops = ''
    
        switch (command) {
            
            case "start3":
    
                let numSaid = parseInt(args[0]);
    
    
                if (!numSaid) {
                    numSaid = 1000000000000000000000000000000;
                    oops = ('started')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid)) {
                    numSaid3 = 1000000000000000000000000000000;
                    oops = ('started');
                    message.channel.send(oops);
                }
    
                console.log(numSaid);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Post Meme Command ${numSaid} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
						message.channel.send('pls pm')
                        await sleep(1000);
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
                    await sleep(0)
                }
    
            break;
			case "laptop3":
    
                let numSaid2 = parseInt(args[0]);
    
    
                if (!numSaid2) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, you didn\'t provide an argument, resorting to 10 loops.')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid2)) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, thats not a number, resorting to 10 loops.');
                    message.channel.send(oops);
                }
    
                console.log(numSaid2);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Beg Command ${numSaid2} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
                    message.channel.send('pls buy laptop');
                    await sleep(1000000)
                }
        
            break;
        }
    
    });
	
client4.on('message', async message => { 
    
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        if (!message.content.startsWith(process.env.prefix)) return;
        
        const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    
        let yeetEmbed = ''
        let oops = ''
    
        switch (command) {
            
            case "start4":
    
                let numSaid = parseInt(args[0]);
    
    
                if (!numSaid) {
                    numSaid = 1000000000000000000000000000000;
                    oops = ('started')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid)) {
                    numSaid3 = 1000000000000000000000000000000;
                    oops = ('started');
                    message.channel.send(oops);
                }
    
                console.log(numSaid);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Post Meme Command ${numSaid} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
						message.channel.send('pls pm')
                        await sleep(1000);
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
                    await sleep(0)
                }
    
            break;
			case "laptop4":
    
                let numSaid2 = parseInt(args[0]);
    
    
                if (!numSaid2) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, you didn\'t provide an argument, resorting to 10 loops.')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid2)) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, thats not a number, resorting to 10 loops.');
                    message.channel.send(oops);
                }
    
                console.log(numSaid2);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Beg Command ${numSaid2} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
                    message.channel.send('pls buy laptop');
                    await sleep(1000000)
                }
        
            break;
        }
    
    });
 
client5.on('message', async message => { 
    
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        if (!message.content.startsWith(process.env.prefix)) return;
        
        const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    
        let yeetEmbed = ''
        let oops = ''
    
        switch (command) {
            
            case "start5":
    
                let numSaid = parseInt(args[0]);
    
    
                if (!numSaid) {
                    numSaid = 1000000000000000000000000000000;
                    oops = ('started')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid)) {
                    numSaid3 = 1000000000000000000000000000000;
                    oops = ('started');
                    message.channel.send(oops);
                }
    
                console.log(numSaid);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Post Meme Command ${numSaid} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
						message.channel.send('pls pm')
                        await sleep(1000);
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
                    await sleep(0)
                }
    
            break;
			case "laptop5":
    
                let numSaid2 = parseInt(args[0]);
    
    
                if (!numSaid2) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, you didn\'t provide an argument, resorting to 10 loops.')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid2)) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, thats not a number, resorting to 10 loops.');
                    message.channel.send(oops);
                }
    
                console.log(numSaid2);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Beg Command ${numSaid2} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
                    message.channel.send('pls buy laptop');
                    await sleep(1000000)
                }
        
            break;
        }
    
    });

client6.on('message', async message => { 
    
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        if (!message.content.startsWith(process.env.prefix)) return;
        
        const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    
        let yeetEmbed = ''
        let oops = ''
    
        switch (command) {
            
            case "start6":
    
                let numSaid = parseInt(args[0]);
    
    
                if (!numSaid) {
                    numSaid = 1000000000000000000000000000000;
                    oops = ('started')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid)) {
                    numSaid3 = 1000000000000000000000000000000;
                    oops = ('started');
                    message.channel.send(oops);
                }
    
                console.log(numSaid);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Post Meme Command ${numSaid} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
						message.channel.send('pls pm')
                        await sleep(1000);
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
                    await sleep(0)
                }
    
            break;
			case "laptop6":
    
                let numSaid2 = parseInt(args[0]);
    
    
                if (!numSaid2) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, you didn\'t provide an argument, resorting to 10 loops.')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid2)) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, thats not a number, resorting to 10 loops.');
                    message.channel.send(oops);
                }
    
                console.log(numSaid2);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Beg Command ${numSaid2} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
                    message.channel.send('pls buy laptop');
                    await sleep(1000000)
                }
        
            break;
        }
    
    });

client7.on('message', async message => { 
    
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        if (!message.content.startsWith(process.env.prefix)) return;
        
        const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    
        let yeetEmbed = ''
        let oops = ''
    
        switch (command) {
            
            case "start7":
    
                let numSaid = parseInt(args[0]);
    
    
                if (!numSaid) {
                    numSaid = 1000000000000000000000000000000;
                    oops = ('started')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid)) {
                    numSaid3 = 1000000000000000000000000000000;
                    oops = ('started');
                    message.channel.send(oops);
                }
    
                console.log(numSaid);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Post Meme Command ${numSaid} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
						message.channel.send('pls pm')
                        await sleep(1000);
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
                    await sleep(0)
                }
    
            break;
			case "laptop7":
    
                let numSaid2 = parseInt(args[0]);
    
    
                if (!numSaid2) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, you didn\'t provide an argument, resorting to 10 loops.')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid2)) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, thats not a number, resorting to 10 loops.');
                    message.channel.send(oops);
                }
    
                console.log(numSaid2);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Beg Command ${numSaid2} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
                    message.channel.send('pls buy laptop');
                    await sleep(1000000)
                }
        
            break;
        }
    
    });
 
client8.on('message', async message => { 
    
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        if (!message.content.startsWith(process.env.prefix)) return;
        
        const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    
        let yeetEmbed = ''
        let oops = ''
    
        switch (command) {
            
            case "start8":
    
                let numSaid = parseInt(args[0]);
    
    
                if (!numSaid) {
                    numSaid = 1000000000000000000000000000000;
                    oops = ('started')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid)) {
                    numSaid3 = 1000000000000000000000000000000;
                    oops = ('started');
                    message.channel.send(oops);
                }
    
                console.log(numSaid);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Post Meme Command ${numSaid} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
						message.channel.send('pls pm')
                        await sleep(1000);
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
                    await sleep(0)
                }
    
            break;
			case "laptop8":
    
                let numSaid2 = parseInt(args[0]);
    
    
                if (!numSaid2) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, you didn\'t provide an argument, resorting to 10 loops.')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid2)) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, thats not a number, resorting to 10 loops.');
                    message.channel.send(oops);
                }
    
                console.log(numSaid2);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Beg Command ${numSaid2} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
                    message.channel.send('pls buy laptop');
                    await sleep(1000000)
                }
        
            break;
        }
    
    });

client9.on('message', async message => { 
    
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        if (!message.content.startsWith(process.env.prefix)) return;
        
        const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    
        let yeetEmbed = ''
        let oops = ''
    
        switch (command) {
            
            case "start9":
    
                let numSaid = parseInt(args[0]);
    
    
                if (!numSaid) {
                    numSaid = 1000000000000000000000000000000;
                    oops = ('started')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid)) {
                    numSaid3 = 1000000000000000000000000000000;
                    oops = ('started');
                    message.channel.send(oops);
                }
    
                console.log(numSaid);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Post Meme Command ${numSaid} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
						message.channel.send('pls pm')
                        await sleep(1000);
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
                    await sleep(0)
                }
    
            break;
			case "laptop9":
    
                let numSaid2 = parseInt(args[0]);
    
    
                if (!numSaid2) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, you didn\'t provide an argument, resorting to 10 loops.')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid2)) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, thats not a number, resorting to 10 loops.');
                    message.channel.send(oops);
                }
    
                console.log(numSaid2);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Beg Command ${numSaid2} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
                    message.channel.send('pls buy laptop');
                    await sleep(1000000)
                }
        
            break;
        }
    
    });

client10.on('message', async message => { 
    
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        if (!message.content.startsWith(process.env.prefix)) return;
        
        const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    
        let yeetEmbed = ''
        let oops = ''
    
        switch (command) {
            
            case "start10":
    
                let numSaid = parseInt(args[0]);
    
    
                if (!numSaid) {
                    numSaid = 1000000000000000000000000000000;
                    oops = ('started')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid)) {
                    numSaid3 = 1000000000000000000000000000000;
                    oops = ('started');
                    message.channel.send(oops);
                }
    
                console.log(numSaid);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Post Meme Command ${numSaid} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
						message.channel.send('pls pm')
                        await sleep(1000);
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
                    await sleep(0)
                }
    
            break;
			case "laptop10":
    
                let numSaid2 = parseInt(args[0]);
    
    
                if (!numSaid2) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, you didn\'t provide an argument, resorting to 10 loops.')

                    message.channel.send(oops);                
                }
    
                if (isNaN(numSaid2)) {
                    numSaid2 = 100000000000000000000;
                    oops = ('Oops, thats not a number, resorting to 10 loops.');
                    message.channel.send(oops);
                }
    
                console.log(numSaid2);
    
                yeetEmbed = (`Alright ${message.author.username}, I am now looping the Beg Command ${numSaid2} times.`)

                await message.channel.send(yeetEmbed);
    
                for (var i = 0; i < numSaid; i++) {
                    message.channel.send('pls buy laptop');
                    await sleep(1000000)
                }
        
            break;
        }
    
    });

client.login(process.env.token)
client2.login(process.env.token2)
client3.login(process.env.token3)  
client4.login(process.env.token4)
client5.login(process.env.token5)
client6.login(process.env.token6)  
client7.login(process.env.token7)
client8.login(process.env.token8)
client9.login(process.env.token9) 
client10.login(process.env.token10)  
