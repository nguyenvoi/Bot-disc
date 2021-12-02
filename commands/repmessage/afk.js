module.exports = {
    name: "afk",
    description: "afk",
    execute: async (client, message, args, PREFIX) => {
message.reply(message.author.username +" is afk now, pls wait!! 🕑")
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('⏰');
    },
};