// module.exports = {
//     name: "bye",
//     description: "bye",
//     execute: async (client, message, args, PREFIX) => {
//     message.channel.send("Cút đi " + message.author.username + ":))").then(m => m.react('😢'))
//     },
// };


module.exports = {
    name: "bye",
    description: "bye",
    execute: async (client, message, args, PREFIX) => {
message.reply("Cút đi " + message.author.username + ":))")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('😭');
    },
};