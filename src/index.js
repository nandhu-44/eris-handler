const { Client , Collection } = require("eris");
const path = require("path");
const fs = require('fs')
require("dotenv").config({
    path: path.resolve(__dirname, "../.env"),
})

// Global Variables
const client = (global.client = new Client(`Bot ${process.env.token}`));
const config = (global.config = require("../config.json"));

module.exports = { client } ;

//Collections
client.commands = new Collection();


//Using the handler
require("./handler/commands");
require('./handler/mongoose')


client.connect().catch(console.error);

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at: Promise', promise, 'reason:', reason);
});
