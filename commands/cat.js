const {RichEmbed} = require('discord.js');
const randomPuppy = require("random-puppy");

module.exports = {
    name: "cat",
    description: "Outputs a random cat picture from the following reditt pages.",
    execute: async (message) => {
        const subReddits = ["kittens", "catpictures", "CatsStandingUp", "tuckedinkitties"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setImage(img)
        .setTitle(`Cat Picture from /r/${random}`)
        .setURL(`https://reddit.com/r/${random}`);
        message.channel.send(embed);
    }
}