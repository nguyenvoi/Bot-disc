// module.exports = {
//     name: "invite",
//     description: "invite",
//     execute: async (client, message, args, PREFIX) => {
//         message.channel.send("Invite me: https://mtsa.xyz/invite").then(m => m.react('👌'))
//     },
// };


module.exports = {
    name: "invite",
    description: "invite",
    execute: async (client, message, args, PREFIX) => {
message.reply("Invite me: https://mtsa.xyz/invite")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('👌');
    },
};
