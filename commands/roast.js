module.exports = {
    name: 'roast',
    description: 'Picks a random generated roast and roasts a user',
    execute(message, args) {
        var rand = Math.floor((Math.random() * 10) + 1);
        
        if (!args[1]) message.reply('Please pick a person')

        const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user)

            if (member) {

            switch(rand) {
            case 1:
                message.channel.send(`${user.username}, Light travels faster than sound which is why you seemed bright until you spoke.`)
                 break;
            case 2:
                    message.channel.send(`${user.username}, You have so many gaps in your teeth it looks like your tongue is in jail.`)
                    break;
                case 3:
                    message.channel.send(`${user.username}, I’ll never forget the first time we met. But I’ll keep trying.`)
                    break;
                case 4:
                    message.channel.send(`${user.username}, You bring everyone so much joy, when you leave the room.`)
                    break;
                case 5:
                    message.channel.send(`${user.username}, I thought of you today. It reminded me to take out the trash.`)
                    break;
                case 6:
                    message.channel.send(`${user.username}, You are like a cloud. When you disappear it’s a beautiful day.`)
                    break;
                case 7:
                    message.channel.send(`${user.username}, Someday you’ll go far… and I hope you stay there.`)
                    break;
                case 8:
                    message.channel.send(`${user.username}, Stupidity’s not a crime, so you’re free to go.`)
                    break;
                case 9:
                    message.channel.send(`${user.username}, Brains aren’t everything. In your case they’re nothing.`)
                    break;
                case 10:
                    message.channel.send(`${user.username}, I was hoping for a battle of wits but you appear to be unarmed.`)
                    break;
                }
            }
        }
    }
}