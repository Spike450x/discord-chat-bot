module.exports = {
    name: 'fortune',
    description: 'Outputs a random generated greeting to the user.',
    execute(message) {
        var rand = Math.floor((Math.random() * 10) + 1);
        switch(rand) {
            case 1:
                message.channel.send('A beautiful, smart, and loving person will be coming into your life.');
                break;
            case 2:
                message.channel.send('A dubious friend may be an enemy in camouflage.');
                break;
            case 3:
                message.channel.send('A faithful friend is a strong defense.');
                break;
            case 4:
                message.channel.send('A fresh start will put you on your way.');
                break;
            case 5:
                message.channel.send('A lifetime friend shall soon be made.');
                break;
            case 6:
                message.channel.send('A lifetime of happiness lies ahead of you.');
                break;
            case 7:
                message.channel.send('Accept something that you cannot change, and you will feel better.');
                break;
            case 8:
                message.channel.send('Any decision you have to make tomorrow is a good decision.');
                break;
            case 9:
                message.channel.send('Good news will come to you by mail.');
                break;
            case 10:
                message.channel.send('Meditation with an old enemy is advised.');
                break;
        }
    }
}