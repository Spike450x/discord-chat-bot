const {RichEmbed} = require('discord.js');

module.exports = {
    name: 'christmas',
    description: 'Outputs a countdown until Christmas 2021',
    execute(message) {
        // Set the date we're counting down to
        var countDownDate = new Date("December 25, 2021").getTime();

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setTitle('Christmas 2021 Countdown!')
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
        .setDescription(days + " days\n" + hours + " hours\n" + minutes + " minutes\n" + seconds + " seconds");
        message.channel.send(embed);
    }
}