var TelegramBot = require('node-telegram-bot-api');

var token = process.env.TELEGRAM_TOKEN || '242921503:AAELa-0-KpXAsAJnLDUowH3GCQqgZsr23BM';

var bot = new TelegramBot(token, {
  webHook: {
    port: 9090,
    host: '127.0.0.1'
  }
});

bot.setWebHook('https://victorgil.me' + '/pongbot' + token);
console.log('webhook set!');


module.exports = bot;
