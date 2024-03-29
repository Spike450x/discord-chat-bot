const {RichEmbed} = require('discord.js');

module.exports = {
    name: 'reserve',
    description: 'Sends the user links these reservation websites',
    execute(message) {
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setTitle("Reserve rooms")
        .setDescription("Please follow the links to reserve rooms or spaces!")
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
            .addField('Student Union Classroom', 'https://studentunion.ucf.edu/fixed-setup-meeting-rooms/')
        .addField('Normal Classroom', 'https://registrar.ucf.edu/classroom-reservations/')
            .addField('Patio Space', 'https://studentunion.ucf.edu/student-org-tabling/')
            .addField('Market Day', 'https://studentunion.ucf.edu/about-market-day/')
        .addField('Banner Space', 'https://studentunion.ucf.edu/student-org-banners/')
        message.channel.send(embed);
        //message.channel.send("Please check your inbox! :smile:")
    }
}