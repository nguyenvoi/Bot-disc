// module.exports = {
//     name: "hello",
//     description: "Hello",
//     execute: async (client, message, args, PREFIX) => {
//        message.channel.send("Hello " + message.author.username +"=))").then(m => m.react('🔥'))
//     },
// };



module.exports = {
    name: "hello",
    description: "hello",
    execute: async (client, message, args, PREFIX) => {
message.reply("Hello " + message.author.username +"=))")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('🔥');
    },
};