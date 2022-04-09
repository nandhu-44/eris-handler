const { Client , Collection } = require("eris");
require('dotenv').config(); //or use config.json

const client = new Client(`Bot ${process.env.TOKEN}`);

module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);


client.connect().catch(console.error);

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at: Promise', promise, 'reason:', reason);
});
