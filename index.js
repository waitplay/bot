const TelegramBot = require('node-telegram-bot-api');


const TOKEN = "585275748:AAEmqfzsXQo2MZBHdvfIK_HrAfqaHaUdJEI";
API_URL = 'https://api.telegram.org/bot%s/sendMessage' % TOKEN;


numb = rand.random(1,2)
if numb == 1:
bot.send_message(message.chat.id, "YES")
elif numb == 2:
bot.send_message(message.chat.id, "NO")
else:
bot.send_message(message.chat.id, "end")