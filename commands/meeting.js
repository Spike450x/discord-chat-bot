const {RichEmbed} = require('discord.js');

module.exports = {
    name: 'meeting',
    description: 'Send the user our meeting information',
    execute(message) {
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setTitle("Meeting Information")
        .addField('Eboard Meetings', 'Fridays at 5:30 pm\nTBD')
        .addField('Chapter Meetings', 'Wednesdays at 9:00 pm\nTBD')
        .addField('Pledge Class', 'TBA\nTBA')
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
        message.channel.send(embed);
        //message.channel.send("Please check your inbox! :smile:")
    }
}