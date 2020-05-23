require('dotenv').config();

const { ENV, PORT, API_URL, API_KEY_TOKEN } = process.env;

module.exports = { ENV, PORT, API_URL, API_KEY_TOKEN };
