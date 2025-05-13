import { Telegraf } from 'telegraf';
import { config } from './config';

console.log(config.botToken); // Use it safely


if (!config.botToken) {
  throw new Error('BOT_TOKEN must be provided!');
}

const WEBAPP_URL = process.env.WEBAPP_URL || '';

const bot = new Telegraf(  config.botToken);

// Basic commands
bot.command('start', (ctx: any) => {
  ctx.reply('Welcome to TaskVaultBot! 🚀\nUse /help to see available commands.');
});

bot.command('help', (ctx: any) => {
  ctx.reply(
    'Available commands:\n' +
    '/start - Start the bot\n' +
    '/help - Show this help message\n' +
    '/webapp - Open the Mini App'
  );
});

bot.command('webapp', (ctx: any) => {
    const chatId = ctx.chat.id;
    // Encode le chatId en base64
    const encodedGroupId = Buffer.from(chatId.toString()).toString('base64');
    
    console.log('Chat ID:', chatId);
    console.log('Encoded Group ID:', encodedGroupId);
    
    ctx.reply('Open Web App', {
      reply_markup: {
        inline_keyboard: [[
          { text: "Open App", url: `${WEBAPP_URL}?startapp=${encodedGroupId}` }
        ]]
      }
    });
  });

bot.launch().then(() => {
  console.log('Bot is running...');
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));