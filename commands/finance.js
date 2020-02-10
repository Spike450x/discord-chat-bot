const {RichEmbed} = require('discord.js');

module.exports = {
    name: 'finance',
    description: 'Sends the chapters financial details to the user so they can make any donations or pay dues.',
    execute(message) {
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setTitle('Cash App')
        .setURL('https://cash.app/login')
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
        .setDescription('Login to your cash app account and use this tag to make a payment!')
        .addField('Account','$APOpsiomega');
        message.author.send(embed);
        message.channel.send("Please check your inbox! :smile:")
    }
}