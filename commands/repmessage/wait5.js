// module.exports = {
//     name: "wait5",
//     description: "wait5",
//     execute: async (client, message, args, PREFIX) => {
//        message.channel.send("Please wait for " + message.author.username + " 5 minutes!").then(m => m.react('🤔'))
//     },
// };


module.exports = {
    name: "wait5",
    description: "wait5",
    execute: async (client, message, args, PREFIX) => {
message.reply("Please wait for " + message.author.username + " 5 minutes!")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('🕐');
    },
};