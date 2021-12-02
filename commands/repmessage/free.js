// module.exports = {
//     name: "free",
//     description: "free",
//     execute: async (client, message, args, PREFIX) => {
//        message.channel.send(message.author.username +" is free now! 🆓").then(m => m.react('🥶'))
//     },
// };


module.exports = {
    name: "free",
    description: "free",
    execute: async (client, message, args, PREFIX) => {
message.reply(message.author.username +" is free now! 🆓")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('❄️');
    },
};