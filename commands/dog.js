const {RichEmbed} = require('discord.js');
const randomPuppy = require("random-puppy");

module.exports = {
    name: "dog",
    description: "Outputs a random dog picture from the following reditt pages.",
    execute: async (message) => {
        const subReddits = ["dogpictures", "lookatmydog", "dogs", "puppy101"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setImage(img)
        .setTitle(`Dog Picture from /r/${random}`)
        .setURL(`https://reddit.com/r/${random}`);
        message.channel.send(embed);
    }
}