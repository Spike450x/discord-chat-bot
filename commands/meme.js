const {RichEmbed} = require('discord.js');
const randomPuppy = require("random-puppy");

module.exports = {
    name: "meme",
    description: "Outputs a random meme from the following reditt pages.",
    execute: async (message) => {
        const subReddits = ["dankmeme", "meme", "me_irl", "wholesomememes"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
        const embed = new RichEmbed()
        .setColor(0xFF0000)
        .setImage(img)
        .setTitle(`Meme from /r/${random}`)
        .setURL(`https://reddit.com/r/${random}`);
        message.channel.send(embed);
    }
}