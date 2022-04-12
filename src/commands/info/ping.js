const { Client, Message } = require('eris')

module.exports = {
    name: "ping",
    aliases: ['pong'],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    
    run: async (client, message, args) => {
      await message.channel.createMessage('Pong!')
        // client.createMessage(message.channel.id, {content:`Pong`})
        
    },
};
