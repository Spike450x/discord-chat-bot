const {RichEmbed} = require('discord.js');

module.exports = {
    name: 'info',
    description: 'Sends the user important information about the chapter.',
    execute(message) {
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setTitle("Psi Omega Information")
        .setDescription("Here are some things you should remember about our chapter!")
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
        .addBlankField()
        .addField('Parent Chapter of Psi Omega', 'Tau Mu (USF)', true)
        .addField('Foundation date of Psi Omega', 'November 22, 1975', true)
        .addBlankField()
        .addField('Chapter Name', 'Psi Omega', true)
        .addField('Colors', 'Old Glory Gold and Royal Blue!', true)
        .addBlankField()
        .addField('Motto', 'Be a leader, Be a friend, Be of service!', true)
        .addField('Principles', 'Leadership, Friendship, Service!', true)
        .addBlankField()
        .addField('Flower', 'Forget-Me-Not!', true)
        .addField('Tree', 'Oak Tree!', true)
        .addBlankField()
        .addField('Jewel', 'Diamond!', true)
        .addField('Bird', 'Golden Eagle', true)
        .addBlankField()
        .addField('4 C\'s of service', 'Chapter, Campus, Community, Country', true)
        .addField('Region and Section', 'Region K Section 2', true)
        message.channel.send(embed);
        //message.channel.send("Please check your inbox! :smile:")
    }
}