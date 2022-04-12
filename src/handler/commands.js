const { glob } = require("glob");
const { promisify } = require("util");
const fs = require("fs");

const globPromise = promisify(glob);

(async () => {
    //Loading commands
    const commandFiles = await globPromise(`${process.cwd()}/src/commands/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            client.commands.set(file.name, properties);
            console.log(`✅ Loaded command => ${file.name}`);
        }
    });
    console.log('🧭  Loaded all commands! ');

    // Loading Events
    const eventFiles = await globPromise(`${process.cwd()}/src/events/*.js`);
    eventFiles.map((value) => {
         require(value);
    });
    fs.readdirSync(`${process.cwd()}/src/events/`).forEach((file) => {
        console.log(`✅ Loaded event => ${file.replace('.js', '')}`);
    });
    console.log('🧭  Loaded all events! ');
})();   

