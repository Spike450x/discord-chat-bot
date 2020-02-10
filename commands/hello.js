module.exports = {
    name: 'hello',
    description: 'Outputs a random generated greeting to the user.',
    execute(message) {
        var rand = Math.floor((Math.random() * 10) + 1);
        switch(rand) {
            case 1:
                message.channel.send('Hello there human! I am so happy to meet you!');
                break;
            case 2:
                message.channel.send('Hi there! My name is Horton!');
                break;
            case 3:
                message.channel.send('What\'s up bro! I am Horton, the most amazing bot in the world!');
                break;
            case 4:
                message.channel.send('Hey there, I am an amazing bot called Horton!');
                break;
            case 5:
                message.channel.send('Hi! I am Horton and I am here to serve the Psi Omega Chapter!');
                break;
            case 6:
                message.channel.send('I am alive and so ready to serve my friends' + ":smile:!");
                break;
            case 7:
                message.channel.send('Omg hey!! Horton is here to be the best bot for my friends!');
                break;
            case 8:
                message.channel.send('Good day to you my friend!');
                break;
            case 9:
                message.channel.send('I am the one and only ... Horton Bot' + ":wave:!");
                break;
            case 10:
                message.channel.send('It is I ... who? Well it\'s me, Horton!');
                break;
        }
    }
}