const { Client , Collection } = require("eris");
const path = require("path");
require("dotenv").config({
    path: path.resolve(__dirname, "../.env"),
})

// Global Variables
const client = (global.client = new Client(`Bot ${process.env.token}`));
const config = (global.config = require("../config.json"));

module.exports = { client } ;

//Collections
client.commands = new Collection();


// Initializing the project
require("./handler/index");
require('./mongoose')


client.connect().catch(console.error);

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at: Promise', promise, 'reason:', reason);
});
