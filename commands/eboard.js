const {RichEmbed} = require('discord.js');

module.exports = {
    name: 'eboard',
    description: 'Sends the user our executive boards contact information',
    execute(message) {
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setTitle('Executive Boards Contact Information')
        .setDescription('This document contains the executive boards contact information!')
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
        .addField("President - Krupali Patel", "Email: apoucfpresident1975@gmail.com\nPhone: (407)257-4517")
        .addField("Vice President of Membership - Joshua Wood", "Email: apoucfmvp@gmail.com\nPhone: (850)218-3830")
        .addField("Vice President of Service - Camila Colon", "Email: apopsiomegaservice@gmail.com\nPhone: (850)529-7980")
        .addField("Vice President of Fellowship - Lia Fiore", "Email: apoucffellowship@gmail.com\nPhone: (407)432-4429")
        .addField("Pledge Trainer - Laurel Rogers", "Email: apoucfpledgetrainer1975@gmail.com\nPhone: (561)543-6059")
        .addField("Sergeant At Arms - James Conomea", "Email: apoucfsaa1975@gmail.com\nPhone: (904)599-7850")
        .addField("Treasurer - Helen Rivera", "Email: apoucftreasurer1975@gmail.com\nPhone: (352)214-7149")
        .addField("Corresponding Secretary - Valerie Langdorf/James LaBranche", "Email: apoucfcorresponding@gmail.com\nPhone: (859)475-7760 / (772)643-2299")
        message.author.send(embed);
        message.channel.send("Please check your inbox! :smile:")
        .then(message => message.delete(12000));
    }
}