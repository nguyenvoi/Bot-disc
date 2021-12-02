// module.exports = {
//     name: "wait1h",
//     description: "wait1h",
//     execute: async (client, message, args, PREFIX) => {
//        message.channel.send("Please wait for " + message.author.username + " 1 hour!").then(m => m.react('🤔'))
//     },
// };


module.exports = {
    name: "wait1h",
    description: "wait1h",
    execute: async (client, message, args, PREFIX) => {
message.reply("Please wait for " + message.author.username + " 1 hour!")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('🕐');
    },
};