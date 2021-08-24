const {RichEmbed} = require('discord.js');

module.exports = {
    name: 'relay',
    description: 'Sends the user a link our relay for life fundraising page.',
    execute(message) {
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setTitle("Relay For Life")
        .setURL('https://secure.acsevents.org/site/STR?fr_id=96056&pg=team&team_id=2525987&fbclid=IwAR1WxG_VoSqqUnYbmKUmFJNVlu12pkofMX9v1hZRwLH28om3aPsyGvi01rM')
        .setDescription("Please follow this link to be taken to our relay for life fundraising page!")
        .setThumbnail('https://www.rsu.edu/wp-content/uploads/2019/08/APO-Logo.png')
        message.channel.send(embed);
        message.channel.send("Please check your inbox! :smile:")
    }
}