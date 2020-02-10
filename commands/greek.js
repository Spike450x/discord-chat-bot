const {RichEmbed} = require('discord.js');

module.exports = {
    name: 'greek',
    description: 'Sends the user the greek alphabet',
    execute(message) {
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setTitle("Greek Alphabet")
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
        .addField('Text Version', 'Alpha Beta Gamma Delta Epsilon\nZeta Eta Theta Iota Kappa Lambda\nMu Nu Xi Omicron Pi Rho Sigma\nTau Upsilon Phi Chi Psi Omega')
        .addBlankField()
        .setImage('https://i.ytimg.com/vi/ZUrZHF_WBeI/hqdefault.jpg');
        message.author.send(embed);
        message.channel.send("Please check your inbox! :smile:")
    }
}