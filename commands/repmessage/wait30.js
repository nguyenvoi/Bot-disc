// module.exports = {
//     name: "wait30",
//     description: "wait30",
//     execute: async (client, message, args, PREFIX) => {
//        message.channel.send("Please wait for " + message.author.username + " 30 minutes!").then(m => m.react('🤔'))
//     },
// };


module.exports = {
    name: "wait30",
    description: "wait30",
    execute: async (client, message, args, PREFIX) => {
message.reply("Please wait for " + message.author.username + " 30 minutes!")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('🕐');
    },
};