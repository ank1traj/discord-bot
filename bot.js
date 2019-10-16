var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '1') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

     if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // @ankit
            case 'Hi', 'Hello', 'Hey', 'Hola', 'Bonjour', 'Marhaba', 'Namaskar', 'Nǐ hǎo', 'God dag', 'Hoi', 'Hallo', 'Namaste', 'Salve', 'Konnichiwa':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hey there! Welcome to Programming Enigma'
                });
            // case 'Hello':
            //     bot.sendMessage({
            //         to: channelID,
            //         message: 'Welcome'
            //     });
                
//             case 'What can you do?', 'Tell me about yourself':
//                 bot.sendMessage({
//                     to: channelID,
//                     message: 'I can fetch you all your details'
                });
                break;
                // Just add any case commands if you want to..
        }
     }
});
