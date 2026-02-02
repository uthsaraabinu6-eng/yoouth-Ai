const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/uthsaraabinu6-eng/yoouth-Ai/blob/main/images/batman-dark-1920x1080.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 Youth Ai bot Is Alive Now*",
BOT_OWNER: '94704340986',  // Replace with the owner's phone number



};
