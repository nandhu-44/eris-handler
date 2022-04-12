const { client } = require('../index')

client.on('error', (err) => {
    console.error(`❌ Error ${err?.name}: ${err.message}`);
});