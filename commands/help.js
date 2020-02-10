const {RichEmbed} = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Sends the user a direct message describing how they can see all the different commands. ',
    execute(message) {
        const embed = new RichEmbed()
        .setTitle('Horton Bot')
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
        .setColor(0xFF0000)
        .setDescription('Use the !funcmds command to see all the fun commands I can do!\n\nUse the !apocmds command to see all the apo commands I can do!');
        message.author.send(embed);
        message.channel.send("Please check your inbox! :smile:")
    }
}