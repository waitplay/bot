const TelegramBot = require('node-telegram-bot-api');


const TOKEN = "585275748:AAEmqfzsXQo2MZBHdvfIK_HrAfqaHaUdJEI";
API_URL = 'https://api.telegram.org/bot%s/sendMessage' % TOKEN;


numb = rand.random(1,2);
if numb == 1:
bot.send_message(message.chat.id, "Text1");
elif numb == 2:
bot.send_message(message.chat.id, "Text 2");
else:
bot.send_message(message.chat.id, "end");