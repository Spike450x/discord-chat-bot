const { RichEmbed } = require("discord.js");

module.exports = {
    name: "love",
    description: "Calculates how much a brother loves you.",
    execute: async (message, args) => {
        let person = getMember(message, args[0]);
        
        if (!person || message.author.id === person.id) {
            person = message.guild.members
                .filter(m => m.id !== message.author.id)
                .random();
        }
        
        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);
        const embed = new RichEmbed()
            .setColor("0xFF0000")
            .addField(`☁ **${person.displayName}** loves **${message.member.displayName}** this much:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);
        message.channel.send(embed);
        function getMember (message, toFind = '') {
            toFind = toFind.toLowerCase();
            let target = message.guild.members.get(toFind);
            if (!target && message.mentions.members)
                target = message.mentions.members.first();
            if (!target && toFind) {
                target = message.guild.members.find(member => {
                    return member.displayName.toLowerCase().includes(toFind) ||
                    member.user.tag.toLowerCase().includes(toFind)
                });
            }   
            if (!target) 
                target = message.member;
            return target;
        }
    }
}