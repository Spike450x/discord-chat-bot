const {RichEmbed} = require('discord.js');

module.exports = {
    name: 'risk',
    description: 'Sends the user our risk management',
    execute(message) {
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setTitle('Risk Management')
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
        .setDescription('1). Pledge Trainer\n2). Pledge Trainer Assistant\n3). Membership Vice President\n4). President\n5). Advisor (CAC)');
        message.author.send(embed);
        message.channel.send("Please check your inbox! :smile:")
        //.then(message => message.delete(12000));
    }
}