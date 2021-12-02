module.exports = {
    name: "test",
    description: "test",
    execute: async (client, message, args, PREFIX) => {
message.reply('Visit our website: https://mtsa.xyz')
  .then(() => console.log(`Replied to message "${message.content}"`))
  .catch(console.error);
  message.react('😄');
    },
};