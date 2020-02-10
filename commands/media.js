const {RichEmbed} = require('discord.js');

module.exports = {
    name: 'media',
    description: 'Sends the user all the various links to our social media pages.',
    execute(message) {
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setTitle("Social Media Information")
        .setDescription("Please follow the links to go to desired social media outlet!")
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
        .addField('APO Portal', 'https://www.apoonline.org/')
        .addField('Twitter', 'https://twitter.com/APO_PsiOmega/')
        .addField('Instagram', 'https://www.instagram.com/apo_ucf/')
        .addField('Youtube', 'https://www.youtube.com/channel/UCV05luFntQPwU9PvX2hXV-w/')
        .addField('Facebook', 'https://www.facebook.com/PsiOmega')
        .addField('Psi Omega Website', 'https://www.apoucf.org/')
        .addField('Alpha Phi Omega Website', 'https://apo.org/');
        message.author.send(embed);
        message.channel.send("Please check your inbox! :smile:")
    }
}