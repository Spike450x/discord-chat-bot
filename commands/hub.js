const {RichEmbed} = require('discord.js');

module.exports = {
    name: 'hub',
    description: 'Sends the user a link to the hub',
    execute(message) {
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setTitle("The Hub")
        .setURL('https://osi.ucf.edu/hub/')
        .setDescription("Please follow this link to be taken to the hubs website!")
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
        message.author.send(embed);
        message.channel.send("Please check your inbox! :smile:")
    }
}