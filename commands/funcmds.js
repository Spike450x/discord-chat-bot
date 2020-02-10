const {RichEmbed} = require('discord.js');

module.exports = {
    name: 'funcmds',
    description: 'This command lists all the the possible "fun" commands the bot performs.',
    execute(message) {
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setTitle("Horton Fun Commands")
        .setDescription("Here are all the fun bot commands I can do! Go ahead and try them out!")
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
        .addField('!ask [question]', 'Ask the magic horton any questions about the future and he will answer.')
        .addField('!cat', 'This command will upload cute pictures of cats.')
        .addField('!dog', 'This command will upload cute pictures of dogs.')
        .addField('!fact', 'This command will give you random facts.')
        .addField('!fortune', 'This command will give you a random fortune.')
        .addField('!flip', 'This command flips a coin! Choose heads or tails then horton will flip the coin.')
        .addField('!hello', 'This command says hello to horton.')
        .addField('!joke', 'This command will upload a random joke.')
        .addField('!love [username]', 'This command will show how much someone loves you.')
        .addField('!meme', 'This command will upload a random meme.')
        .addField('!motivate', 'This command will upload a random motivational quote.')
        .addField('!roast [username]', 'This command will roast a fellow brother. Remember, it is a joke!')
        .addField('!serverInfo', 'This command will upload information about the server.')
        .addField('!userInfo [Username]', 'This command will upload information about yourself.')
        .addField('!weather [Location]', 'This command will upload information about the weather in your area.');
        message.channel.send(embed);
    }
}