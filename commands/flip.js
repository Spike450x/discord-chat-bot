module.exports = {
    name: 'flip',
    description: 'The bot "flips a coin"',
    execute(message) {
        var rand = Math.floor((Math.random() * 2) + 1);
        var heads = 'The coin landed on heads!';
        var tails = 'The coin landed on tails!';
        message.channel.send('Flipping coin' + ":smile:")
        setTimeout(pauseTime, 3000);
        function pauseTime() {
            if (rand === 1) {
                message.channel.send(heads)
            } else {
                message.channel.send(tails)
            }
        }
    }
}