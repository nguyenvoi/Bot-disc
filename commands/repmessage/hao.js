// module.exports = {
//     name: "hảo",
//     description: "hảo",
//     execute: async (client, message, args, PREFIX) => {
//     message.channel.send("Hảo " + message.author.username + "=))").then(m => m.react('❤'))
//     },
// };

module.exports = {
    name: "hảo",
    description: "hảo",
    execute: async (client, message, args, PREFIX) => {
message.reply("Hảo " + message.author.username + "=))")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('❤');
    },
};