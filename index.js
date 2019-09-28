'use strict';

const TlegramBot = require('node-telegram-bot-api'),
    request = require('request'),
    fs = require('fs'),
    token = '460519065:AAE08RZfRNSSkC6NrfnUjl6iMQ9tpIILnLY',
    bot = new TelegramBot(token,{polling:true});
//слушаем сообщение от пользователя
bot.on('message', function (msg){
    const id = msg.from.id,
        messageText = msg.text,
        messageText = messageText.toLowerCase();


     if (messageText === 'привет') {
        bot.sendMessage(id, 'Привет я бот');
     }
});