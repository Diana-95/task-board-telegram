// config.js
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env.local located one level above
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const BOT_TOKEN = process.env.BOT_TOKEN;
const WEBAPP_URL = process.env.WEBAPP_URL;

// Optional: throw an error if a required variable is missing
if (!BOT_TOKEN || !WEBAPP_URL) {
  throw new Error('Missing BOT_TOKEN or WEBAPP_URL in environment variables');
}

export const config = {
  botToken: BOT_TOKEN,
  webAppUrl: WEBAPP_URL
};
