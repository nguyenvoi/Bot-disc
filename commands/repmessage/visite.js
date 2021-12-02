// module.exports = {
//     name: "visit",
//     description: "visit",
//     execute: async (client, message, args, PREFIX) => {
//        message.channel.send("Visit our website: http://mtsa.xyz")
//     },
// };


module.exports = {
    name: "visit",
    description: "visit",
    execute: async (client, message, args, PREFIX) => {
message.reply("Visit our website: https://mtsa.xyz")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('👌');
    },
};