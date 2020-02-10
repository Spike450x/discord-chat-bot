const {RichEmbed} = require('discord.js');

module.exports = {
    name: 'scoutInfo',
    description: 'Sends the user our scouting information',
    execute(message) {
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setTitle("Scouting Information")
        .setDescription("Here are some things you should remember about scouts!")
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
        .addField('Scout Law', 'A Scout is trustworthy, loyal, helpful, friendly, courteous, kind, obedient, cheerful, thrifty, brave, clean, and reverent.')
        .addField('Scout Oath', 'On my honor, I will do my best to do my duty to God and my country and to obey the Scout Law to help other people at all times; to keep myself physically strong, mentally awake, and morally straight.');
        message.author.send(embed);
        message.channel.send("Please check your inbox! :smile:")
    }
}