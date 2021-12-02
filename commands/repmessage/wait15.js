// module.exports = {
//     name: "wait15",
//     description: "wait15",
//     execute: async (client, message, args, PREFIX) => {
//        message.channel.send("Please wait for " + message.author.username + " 15 minutes!").then(m => m.react('🤔'))
//     },
// };


module.exports = {
    name: "wait15",
    description: "wait15",
    execute: async (client, message, args, PREFIX) => {
message.reply("Please wait for " + message.author.username + " 15 minutes!")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('🕐');
    },
};