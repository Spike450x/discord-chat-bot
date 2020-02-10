module.exports = {
    name: 'ask',
    description: 'Ask the bot any question and it will give the user its personal input.',
    execute(message, args) {
        var rand = Math.floor((Math.random() * 10) + 1);
        if (!args[2]) {
            return message.reply('It\'s useful to actually ask a question ...' + ":woman_facepalming:")
        }
        message.channel.send('Processing your question' + ":thinking:")
        setTimeout(pauseTime, 3000);
        function pauseTime() {
            switch(rand) {
                case 1:
                    message.channel.send('Yes!')
                    break;
                case 2:
                    message.channel.send('Most Likely!')
                    break;
                case 3:
                    message.channel.send('It is certain!')
                    break;
                case 4:
                    message.channel.send('Without a doubt!')
                    break;
                case 5:
                    message.channel.send('Maybe ... it\'s very unclear')
                    break;
                case 6:
                    message.channel.send('No!')
                    break;
                case 7:
                    message.channel.send('Of course not!')
                    break;
                case 8:
                    message.channel.send('Doubtful')
                    break;
                case 9:
                    message.channel.send('Don\'t count on it!')
                    break;
                case 10:
                    message.channel.send('Sorry ... but no')
                    break;
            }
        }
    }
}