const {RichEmbed} = require('discord.js');

module.exports = {
    name: 'meeting',
    description: 'Send the user our meeting information',
    execute(message) {
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setTitle("Meeting Information")
        .addField('Eboard Meetings', 'Wednesdays at 8:00 pm\nNSC 111')
        .addField('Chapter Meetings', 'Wednesdays at 9:00 pm\nNSC 111')
        .addField('Pledge Class', 'Tuesdays at 7:00 pm\nTBA')
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
        message.author.send(embed);
        message.channel.send("Please check your inbox! :smile:")
    }
}