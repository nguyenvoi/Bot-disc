// module.exports = {
//     name: "chán",
//     description: "chán",
//     execute: async (client, message, args, PREFIX) => {
//        message.channel.send("Pls! Chat together " + message.author.username).then(m => m.react('🤣'))
//     },
// };


module.exports = {
    name: "boring",
    description: "boring",
    execute: async (client, message, args, PREFIX) => {
message.reply("Pls! Chat together " + message.author.username)
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('🤣');
    },
};