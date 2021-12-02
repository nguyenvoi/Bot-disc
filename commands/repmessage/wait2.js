// module.exports = {
//     name: "wait2",
//     description: "wait2",
//     execute: async (client, message, args, PREFIX) => {
//        message.channel.send("Please wait for " + message.author.username + " 2 minutes!").then(m => m.react('🤔'))
//     },
// };

module.exports = {
    name: "wait2",
    description: "wait2",
    execute: async (client, message, args, PREFIX) => {
message.reply("Please wait for " + message.author.username + " 2 minutes!")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('🕐');
    },
};