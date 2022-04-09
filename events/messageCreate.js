const client = require("../index");

client.on("messageCreate", async (message) => {
    if(message.author.bot) return;
    if (!message.content.toLowerCase().startsWith(client.config.prefix)) return;

    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return console.log('Invalid command' + message.content);
    await command.run(client, message, args);
});
