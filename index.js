const { Client, Intents } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const {readdirSync} = require("fs")

const handlers = readdirSync("./handlers/").filter(f => f.endsWith(".js"))

handlers.forEach(handler => {
  require(`./handlers/${handler}`)(client)
});

// client.on('message', async message => {
//   message.channel.send('Ok')
// });

client.login(process.env.CLIENT_ID);