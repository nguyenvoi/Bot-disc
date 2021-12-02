// module.exports = {
//     name: "busy",
//     description: "busy",
//     execute: async (client, message, args, PREFIX) => {
//        message.channel.send(message.author.username +" is busing, do not disturb!").then(m => m.react('📴'))
//     },
// };


module.exports = {
    name: "busy",
    description: "busy",
    execute: async (client, message, args, PREFIX) => {
message.reply(message.author.username +" is busing, do not disturb!")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('📴');
    },
};