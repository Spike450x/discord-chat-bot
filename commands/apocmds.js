const {RichEmbed} = require('discord.js');

module.exports = {
    name: 'apocmds',
    description: 'This command lists all the the possible "business" commands the bot performs.',
    execute(message) {
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setTitle("Horton APO Commands")
        .setDescription("Here are all the APO bot commands I can do! Try them out!")
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
        .addField('!bylaws', 'This command will upload the most updated bylaws of the Psi Omega chapter.')
        .addField('!eboard', 'This command will upload the executive boards contact information.')
        .addField('!finance', 'This command will upload Psi Omega\'s Cash App information.')
        .addField('!greek', 'This command will upload the greek alphabet.')
        .addField('!help', 'This command will send you a private message with instructions on how to use me.')
        .addField('!hub', 'This command will take you to the hubs website.')
        .addField('!info', 'This command will upload important information about the Psi Omega Chapter.')
        .addField('!instagram', 'This command will upload some instagram information about the Psi Omega instagram page.')
        .addField('!media', 'This command will upload all the links to Psi Omega\'s various social media pages.')
        .addField('!meeting', 'This command will remind you of where and when our chapter meetings are.')
        .addField('!reserve', 'This command will upload the links you need to reserve a room or space.')
        .addField('!relay', 'This command will take you to our relay for life fundraising page.')
        .addField('!risk', 'This command will upload the proper risk managment order to follow.')
        .addField('!scoutInfo', 'This command will upload the scout oath and the scout law.')
        .addField('!summer', 'This command will upload a countdown for the start of summer.')
        .addField('!toast', 'This command will upload the toast song');
        message.channel.send(embed);
    }
}