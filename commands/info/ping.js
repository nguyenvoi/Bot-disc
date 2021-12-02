// module.exports = {
//     name: "ping",
//     description: "Returns latency and API ping",
//     execute: async (client, message, args, PREFIX) => {
//        message.channel.send(`Lag khủng khiếp - ${client.ws.ping}ms :))`).then(m => m.react('💯'))
//     },
// };


module.exports = {
    name: "ping",
    description: "ping",
    execute: async (client, message, args, PREFIX) => {
message.reply(`Lag khủng khiếp - ${client.ws.ping}ms :))`)
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('💯');
    },
};