const client = require("../index");

client.on("ready", () => {
    console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`);
    client.editStatus("online", {
        name: `Running on Eris `,
        type: 1,
    });
});