const TelegramBot = require('node-telegram-bot-api');


const TOKEN = "585275748:AAEmqfzsXQo2MZBHdvfIK_HrAfqaHaUdJEI";


const bot = new TelegramBot(TOKEN, {polling: true});
bot.on('message' , msg => {
    return bot.sendMessage(msg.chat.id, `BOT YES or NO , says: "Hi, ${msg.from.first_name}"`);
});