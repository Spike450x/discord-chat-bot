const {RichEmbed} = require('discord.js');

module.exports = {
    name: 'bylaws',
    description: 'Sends the user the most updated version of the chapters bylaws',
    execute(message) {
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setTitle('Psi Omega Bylaws')
        .setDescription('This document is the most updated bylaws of Psi Omega chapter!')
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
        .attachFile('./Bylaws_5_18_21.pdf')
        message.author.send(embed);
        message.channel.send("Please check your inbox! :smile:")
    }
}