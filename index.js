const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');
const express = require('express');

require('dotenv').config();

const app = express();

if (!process.env.BOT_TOKEN) {
  throw new Error('BOT_TOKEN is not provided in .env file');
}

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: true,
});

bot.onText(/\/start/, msg => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Hello!');
});

console.log('Bot has been started...');

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => console.log(`Express is listening on port ${PORT}`));
