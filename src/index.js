const config = require('./config')
const { Client } = require('discord.js')

const bot = new Client();

const PREFIX = '!';

bot.on('ready', () => {
    console.log('The bot is ready to go!');
});

memory = {}

bot.on('message', (message) => {
    
    const args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {
        case 'goiano':
            message.channel.send("É meio burro");
            break;
        case 'baiano':
            message.channel.send("É meio preguiçoso");
            break;
        case 'pedro':
            message.channel.send("Jogando CSGO");
            break;
        case 'memory':
            switch(args[1]) {
                case 'set':
                    key = args[2];
                    value = args[3];
    
                    memory[key] = value;
                    break;
                case 'get':
                    key = args[2];
                    value = memory[key];

                    message.channel.send(value);
                    break;
            }
    }
});

bot.login(config.login_token);