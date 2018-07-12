from telegram.ext import Updater         # пакет называется python-telegram-bot, но Python-
from telegram.ext import CommandHandler  # модуль почему-то просто telegram ¯\_(ツ)_/¯

def start(bot, update):
# подробнее об объекте update: https://core.telegram.org/bots/api#update
    bot.sendMessage(chat_id=update.message.chat_id, text="Здравствуйте.")

updater = Updater(token='TOKEN')  # тут токен, который выдал вам Ботский Отец!

    start_handler = CommandHandler('start', start)  # этот обработчик реагирует
# только на команду /start

updater.dispatcher.add_handler(start_handler)   # регистрируем в госреестре обработчиков
updater.start_polling()  # поехали!
    from telegram.ext import Filters, MessageHandler

def handle_text(bot, update):
# ...

def handle_command(bot, update):
# ...

# MessageHandler -- более универсальный обработчик, который берёт на вход фильтр
text_handler = MessageHandler(Filters.text, self.handle_text)
command_handler = MessageHandler(Filters.command, self.handle_command)
# регистрируем свеженькие обработчики в диспетчере
updater.dispatcher.add_handler(text_handler)     # без регистрации будет работать,
    updater.dispatcher.add_handler(command_handler)  # но не больше трёх месяцев (шутка)
def fibonacci():
a, b = 1, 1
while True:
yield a
a, b = b, a + b

f = fibonacci()
f.throw(Exception)
def doubler(start):
while True:
start = yield (start, start)

d = doubler(42)
print(next(d))  # выводит (42, 42)
print(next(d))  # выводит (None, None), потому что мы забыли что-либо передать!
    print(d.send(43))
def concatenate(iterable1, iterable2):
for item in iterable1:
yield item
for item in iterable2:
yield item
def concatenate(iterable1, iterable2):
yield from iterable1
yield from iterable2
def despaired_person():
yield None
yield None
yield None
return "I'm tired of my uselessness"

def despair_expresser():
result = yield from despaired_person()
print(result)

print(list(f())) # печатает
# I'm tired of my uselessness
# [None, None, None]
import collections

    from telegram.ext import Filters
    from telegram.ext import MessageHandler
    from telegram.ext import Updater


class DialogBot(object):

def __init__(self, token, generator):
self.updater = Updater(token=token)  # заводим апдейтера
handler = MessageHandler(Filters.text | Filters.command, self.handle_message)
self.updater.dispatcher.add_handler(handler)  # ставим обработчик всех текстовых сообщений
self.handlers = collections.defaultdict(generator)  # заводим мапу "id чата -> генератор"

def start(self):
self.updater.start_polling()

def handle_message(self, bot, update):
print("Received", update.message)
chat_id = update.message.chat_id
if update.message.text == "/start":
# если передана команда /start, начинаем всё с начала -- для
# этого удаляем состояние текущего чатика, если оно есть
self.handlers.pop(chat_id, None)
if chat_id in self.handlers:
# если диалог уже начат, то надо использовать .send(), чтобы
# передать в генератор ответ пользователя
try:
answer = self.handlers[chat_id].send(update.message)
except StopIteration:
    # если при этом генератор закончился -- что делать, начинаем общение с начала
del self.handlers[chat_id]
# (повторно вызванный, этот метод будет думать, что пользователь с нами впервые)
return self.handle_message(bot, update)
else:
# диалог только начинается. defaultdict запустит новый генератор для этого
# чатика, а мы должны будем извлечь первое сообщение с помощью .next()
# (.send() срабатывает только после первого yield)
answer = next(self.handlers[chat_id])
# отправляем полученный ответ пользователю
print("Answer: %r" % answer)
bot.sendMessage(chat_id=chat_id, text=answer)
def dialog():
answer = yield "Здравствуйте! Меня забыли наградить именем, а как зовут вас?"
# убираем ведущие знаки пунктуации, оставляем только
# первую компоненту имени, пишем её с заглавной буквы
name = answer.text.rstrip(".!").split()[0].capitalize()
likes_python = yield from ask_yes_or_no("Приятно познакомиться, %s. Вам нравится Питон?" % name)
if likes_python:
answer = yield from discuss_good_python(name)
else:
answer = yield from discuss_bad_python(name)


def ask_yes_or_no(question):
"""Спросить вопрос и дождаться ответа, содержащего «да» или «нет».

Возвращает:
    bool
"""
answer = yield question
while not ("да" in answer.text.lower() or "нет" in answer.text.lower()):
answer = yield "Так да или нет?"
return "да" in answer.text.lower()


def discuss_good_python(name):
answer = yield "Мы с вами, %s, поразительно похожи! Что вам нравится в нём больше всего?" % name
likes_article = yield from ask_yes_or_no("Ага. А как вам, кстати, статья на Хабре? Понравилась?")
if likes_article:
answer = yield "Чудно!"
else:
answer = yield "Жалко."
return answer


def discuss_bad_python(name):
answer = yield "Ай-яй-яй. %s, фу таким быть! Что именно вам так не нравится?" % name
likes_article = yield from ask_yes_or_no(
    "Ваша позиция имеет право на существование. Статья "
"на Хабре вам, надо полагать, тоже не понравилась?")
if likes_article:
answer = yield "Ну и ладно."
else:
answer = yield "Что «нет»? «Нет, не понравилась» или «нет, понравилась»?"
answer = yield "Спокойно, это у меня юмор такой."
return answer


if __name__ == "__main__":
dialog_bot = DialogBot(sys.argv[1], dialog)
dialog_bot.start()