// module.exports = {
//     name: "studying",
//     description: "studying",
//     execute: async (client, message, args, PREFIX) => {
//        message.channel.send(message.author.username +" is studying, do not disturb! 📖").then(m => m.react('📖'))
//     },
// };



module.exports = {
    name: "studying",
    description: "studying",
    execute: async (client, message, args, PREFIX) => {
message.reply(message.author.username +" is studying, do not disturb! 📖")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('📖');
    },
};