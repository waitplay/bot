const TelegramBot = require('node-telegram-bot-api');


const TOKEN = "585275748:AAEmqfzsXQo2MZBHdvfIK_HrAfqaHaUdJEI";
API_URL = 'https://api.telegram.org/bot%s/sendMessage' % TOKEN;
# -*- coding: utf-8 -*-
    from telegram.ext import Updater
from telegram.ext import CommandHandler

def start(bot, update):
numb = rand.random(1,2);
if numb == 1:
bot.send_message(message.chat.id, "YES");
elif numb === 2:
bot.send_message(message.chat.id, "NO");
else:
bot.send_message(message.chat.id, "end");

import random
a = [];
for i in range(1, 101):
a.append(i);
random.shuffle(a);