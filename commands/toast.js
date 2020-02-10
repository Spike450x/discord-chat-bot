const {RichEmbed} = require('discord.js');

module.exports = {
    name: 'toast',
    description: 'Sends the chapters toast song to the user',
    execute(message) {
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setTitle("Toast Song")
        .setDescription("Here is our beloved toast song!")
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
        .addField('Verse One', 'Here\'s to Alpha Phi Omega,\nLoyal brothers we.\nTrue to self and to each other,\nFirm in Loyalty.\n\nDaily working, daily striving,\nEver more to be,\nHere\'s to Alpha Phi Omega,\nOur Fraternity.')
        .addField('Verse Two', 'Brothers clasp the hands of Brothers,\nStrong the circle we.\nEver mindful, ever serving\nAll humanity.\n\nNow we raise our grateful voices\nIn a song to Thee,\nTrue to Alpha Phi Omega\nMay we always be!');
        message.author.send(embed);
        message.channel.send("Please check your inbox! :smile:")
    }
}

