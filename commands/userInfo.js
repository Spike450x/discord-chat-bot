const {RichEmbed} = require('discord.js');
const moment = require("moment");

module.exports = {
    name: 'userInfo',
    description: 'Outputs user information (Either yourself or the user you tagged)',
    execute(message) {
        let member;
        if (message.mentions.users.first()) {
            member = message.mentions.users.first();
        } else {
            member = message.author;
        }
        const embed = new RichEmbed()
        .setTitle('User Information')
        .addField('UserName', member.username)
        .addField('NickName', `${member.nickname != null ? `${member.nickname}` : 'None'}`)
        .addField('User ID', member.id)
        .addField('Created discord account on', `${moment.utc(member.createdAt).format("MMMM Do, YYYY")}`)
        .addField('Joined Server on', `${moment.utc(member.joinedAt).format("MMMM Do, YYYY")}`)
        .addField('Status', `${member.presence.status}`)
        .setColor(0xFF0000)
        .setThumbnail(member.avatarURL)
        message.channel.send(embed);    
    }
}