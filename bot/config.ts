// config.js
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env.local located one level above
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Validate required variables
if (!process.env.BOT_TOKEN || !process.env.WEBAPP_URL) {
  throw new Error('Missing required environment variables: BOT_TOKEN or WEBAPP_URL');
}

// Export as a frozen object to prevent accidental mutation
const config = Object.freeze({
  botToken: process.env.BOT_TOKEN,
  webAppUrl: process.env.WEBAPP_URL
});

export default config;
