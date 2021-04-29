const { Telegraf } = require('telegraf');
const dotEnv = require('dotenv').config();

const bot = new Telegraf(process.env.TOKEN);

const obsceneLanguage = {
    firstLevel: ['жопа', 'писюн'],
    secondLevel: ['хуй', 'пизда'],
    thirdLevel: ['ты оборзел', 'фильтруй базар']
};

bot.on('message', (ctx) => {
    let msgLowerCase = ctx.message.text.toLowerCase();

    for (let key in obsceneLanguage) {
        for (let i of obsceneLanguage[key]) {
            if (msgLowerCase.includes(i)) {
                ctx.reply('Не ругайся!');
            }
        }
    }
});

// Запускает бота
bot.launch();
