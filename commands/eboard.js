const {RichEmbed} = require('discord.js');

// Task: Get phone numbers

module.exports = {
    name: 'eboard',
    description: 'Sends the user our executive boards contact information',
    execute(message) {
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setTitle('Executive Boards Contact Information')
        .setDescription('This document contains the executive boards contact information!')
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
        .addField("President - Joshua Wood", "Email: apoucfpresident1975@gmail.com\nPhone: (850)218-3830")
        .addField("Vice President of Membership - James Labranche ", "Email: apoucfmvp@gmail.com\nPhone: (772)643-2299")
        .addField("Vice President of Service - Blake Massie/Robert Law", "Email: apopsiomegaservice@gmail.com\nPhone: --")
        .addField("Vice President of Fellowship - Grant Foxman", "Email: apoucffellowship@gmail.com\nPhone: --")
        .addField("Pledge Trainer - Savanna Hirtzel", "Email: apoucfpledgetrainer1975@gmail.com\nPhone: (561)543-6059")
        .addField("Sergeant At Arms - Ashley Wilkins", "Email: apoucfsaa1975@gmail.com\nPhone: --")
        .addField("Treasurer - Gregory Lafay", "Email: apoucftreasurer1975@gmail.com\nPhone: --")
        .addField("Corresponding Secretary - Mikayla Stott", "Email: apoucfcorresponding@gmail.com\nPhone: --")
        message.channel.send(embed);
        /*message.channel.send("Please check your inbox! :smile:")
        .then(message => message.delete(12000));*/
    }
}