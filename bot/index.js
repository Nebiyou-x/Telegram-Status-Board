// bot/index.js
require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// /start - welcome + open mini app button
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "👋 Welcome! Tap below to post your status.", {
        reply_markup: {
            inline_keyboard: [[
                {
                    text: "Open Mini App",
                    web_app: { url: process.env.MINI_APP_URL }
                }
            ]]
        }
    });
});

// /latest - fetch last 3 statuses
bot.onText(/\/latest/, async (msg) => {
    const chatId = msg.chat.id;
    try {
        const { data } = await axios.get(`${process.env.BACKEND_URL}/latest`);
        if (data.length === 0) {
            bot.sendMessage(chatId, "No statuses yet. Be the first!");
        } else {
            let text = "📢 Latest statuses:\n\n";
            data.forEach(s => {
                text += `👤 ${s.name}: ${s.status}\n`;
            });
            bot.sendMessage(chatId, text);
        }
    } catch (err) {
        bot.sendMessage(chatId, "⚠️ Couldn't fetch statuses.");
    }
});

console.log("Bot is running...");
