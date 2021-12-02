// module.exports = {
//     name: "wait1",
//     description: "wait1",
//     execute: async (client, message, args, PREFIX) => {
//        message.channel.send("Please wait for " + message.author.username + " 1 minute!").then(m => m.react('🤔'))
//     },
// };

module.exports = {
    name: "wait1",
    description: "wait1",
    execute: async (client, message, args, PREFIX) => {
message.reply("Please wait for " + message.author.username + " 1 minute!")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('🕐');
    },
};