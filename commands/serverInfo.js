const {RichEmbed} = require('discord.js');
const moment = require("moment");

module.exports = {
    name: 'serverInfo',
    description: 'Outputs the servers information',
    execute(message) {
        const embed = new RichEmbed()
        .setTitle('Server Information')
        .addField('Server Name', message.guild.name)
        .addField('Owner', message.guild.owner)
        .addField('Region', message.guild.region)
        .addField('Channels', message.guild.channels.size)
        .addField('Members', message.guild.memberCount)
        .addField('Online', message.guild.members.filter(mem => mem.presence.status != "offline").size)
        .addField('Offline', message.guild.members.filter(mem => mem.presence.status === "offline").size)
        .addField('Bots', message.guild.members.filter(mem => mem.user.bot === true).size)
        .addField('Total Number of Roles', message.guild.roles.size)
        .addField('Creation Date', moment.utc(message.guild.createdAt).format("MMMM Do, YYYY"))
        .setColor(0xFF0000)
        .setThumbnail(message.guild.iconURL)
        message.channel.send(embed);    
    }
}