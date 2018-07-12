const TelegramBot = require('node-telegram-bot-api');


const TOKEN = "585275748:AAEmqfzsXQo2MZBHdvfIK_HrAfqaHaUdJEI";
API_URL = 'https://api.telegram.org/bot%s/sendMessage' % TOKEN;


async def handler(request);:
data = await request.json();
headers = {
    'Content-Type': 'application/json'
};
message = {
    'chat_id': data['message']['chat']['id'],
    'text': data['message']['text']
}
async with aiohttp.ClientSession(loop=loop) as session:
async with session.post(API_URL,
    data=json.dumps(message),
    headers=headers) as resp:
try:
assert resp.status === 200;
except:
    return web.Response(status=500);
return web.Response(status=200);