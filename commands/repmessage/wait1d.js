// module.exports = {
//     name: "wait1d",
//     description: "wait1d",
//     execute: async (client, message, args, PREFIX) => {
//        message.channel.send("Please wait for " + message.author.username + " 1 day!").then(m => m.react('🤔'))
//     },
// };



module.exports = {
    name: "wait1d",
    description: "wait1d",
    execute: async (client, message, args, PREFIX) => {
message.reply("Please wait for " + message.author.username + " 1 day!")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('🕐');
    },
};