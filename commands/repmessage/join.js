// module.exports = {
//     name: "join",
//     description: "join",
//     execute: async (client, message, args, PREFIX) => {
//        message.channel.send("Join our Discord server: https://discord.gg/Cah38jHxxP")
//     },
// };

module.exports = {
    name: "join",
    description: "join",
    execute: async (client, message, args, PREFIX) => {
message.reply("Join our Discord server: https://discord.gg/Cah38jHxxP")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('👌');
    },
};