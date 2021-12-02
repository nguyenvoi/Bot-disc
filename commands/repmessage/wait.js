// module.exports = {
//     name: "wait",
//     description: "wait",
//     execute: async (client, message, args, PREFIX) => {
//        message.channel.send("Please wait for " + message.author.username + "!").then(m => m.react('🤔'))
//     },
// };


module.exports = {
    name: "wait",
    description: "wait",
    execute: async (client, message, args, PREFIX) => {
message.reply("Please wait for " + message.author.username + "!")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('🕑');
    },
};