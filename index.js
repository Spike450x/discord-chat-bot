// Connect bot to proper files
const Discord = require('discord.js');
const {prefix, token, giphyToken} = require('./config.json');
const client = new Discord.Client();

// Opens Commands File
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Activates the bot and lets terminal know that the bot is active!
client.on('ready', () => {
    console.log(`Hello! ${client.user.username} bot is now Online!`);
    client.user.setActivity('Service to the world!');
   // client.message.channel("There is no need to fear, Horton Bot is here!")
})

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]) {
        case 'info':
            client.commands.get('info').execute(message);
            break;
        case 'risk':
            client.commands.get('risk').execute(message); 
            break;
        case 'userInfo':
            client.commands.get('userInfo').execute(message);  
            break;
        case 'media':
            client.commands.get('media').execute(message); 
            break;
        case 'toast':
            client.commands.get('toast').execute(message); 
            break;
        case 'greek':
            client.commands.get('greek').execute(message); 
            break;
        case 'help':
            client.commands.get('help').execute(message); 
            break;
        case'bylaws':
            client.commands.get('bylaws').execute(message); 
            break;
        case 'finance':
            client.commands.get('finance').execute(message);
            break;
        case 'scoutInfo':
            client.commands.get('scoutInfo').execute(message);
            break;
        case 'christmas':
            client.commands.get('christmas').execute(message);
            break;
        case 'motivate':
            client.commands.get('motivate').execute(message);
            break;
        case 'meme':
            client.commands.get('meme').execute(message);
            break;
        case 'dog':
            client.commands.get('dog').execute(message);
            break;
        case 'cat':
            client.commands.get('cat').execute(message);
            break;
        case 'funcmds':
            client.commands.get('funcmds').execute(message);
            break;
        case 'joke':
            client.commands.get('joke').execute(message);
            break;
        case 'weather':
            client.commands.get('weather').execute(message, args);
            break;
        case 'hello':
            client.commands.get('hello').execute(message);
            break;
        case 'serverInfo':
            client.commands.get('serverInfo').execute(message);
            break;
        case 'flip':
            client.commands.get('flip').execute(message);
            break;
        case 'instagram':
            client.commands.get('instagram').execute(message);
            break;
        case 'love':
            client.commands.get('love').execute(message, args);
            break;
        case 'fact':
            client.commands.get('fact').execute(message);
            break;
        case 'ask':
            client.commands.get('ask').execute(message, args);
            break;
        case 'reserve':
            client.commands.get('reserve').execute(message);
            break;
        case 'hub':
            client.commands.get('hub').execute(message);
            break;
        case 'apocmds':
            client.commands.get('apocmds').execute(message);
            break;
        case 'eboard':
            client.commands.get('eboard').execute(message);
            break;
        case 'roast':
            client.commands.get('roast').execute(message, args);
            break;
        case 'fortune':
            client.commands.get('fortune').execute(message);
            break;
        case 'meeting':
            client.commands.get('meeting').execute(message);
            break;
        case 'relay':
            client.commands.get('relay').execute(message);
            break;
    }
});
client.login(token);