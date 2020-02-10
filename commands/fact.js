const {RichEmbed} = require('discord.js');
const randomPuppy = require("random-puppy");

module.exports = {
    name: "fact",
    description: "Outputs a random fact from the following reditt pages.",
    execute: async (message) => {
        const subReddits = ["facts", "funfacts"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setImage(img)
        // .setTitle(`Meme from /r/${random}`)
        .setURL(`https://reddit.com/r/${random}`);
        message.channel.send(embed);
    }
}