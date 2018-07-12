const TelegramBot = require('node-telegram-bot-api');


const TOKEN = "585275748:AAEmqfzsXQo2MZBHdvfIK_HrAfqaHaUdJEI";
API_URL = 'https://api.telegram.org/bot%s/sendMessage' % TOKEN;


import random
a = [];
for i in range(1, 101):
a.append(i);
random.shuffle(a);