// module.exports = {
//     name: "clap",
//     description: "clap",
//     execute: async (client, message, args, PREFIX) => {
//        message.channel.send("👏")
//     },
// };


module.exports = {
    name: "clap",
    description: "clap",
    execute: async (client, message, args, PREFIX) => {
message.reply("👏")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('🥰');
    },
};