// module.exports = {
//     name: "say",
//     description: "Says what to say",
//     execute: async (client, message, args, PREFIX) => {
//         // console.log(message);
//         if (!args[0]) return;
//         message.channel.send(args.join(" "));
//     },
// };

module.exports = {
    name: "say",
    description: "Says what to say!",
    execute: async (client, message, args, PREFIX) => {
        if (!args[0]) return;

        msg =
        `${args.join(" ")}`
    // Say by @${message.author.username}!
    ;
    message.channel.send(msg)
  message.delete({ timeout: 5000 })
    .then(msg => console.log(`Deleted message from ${msg.author.username} after 0 seconds`))
    .catch(console.error);
    },
};


// module.exports = {
//     name: "afk",
//     description: "afk",
//     execute: async (client, message, args, PREFIX) => {
//         msg = 
//     `@${message.author.username} is afk now, pls wait!! 🕑
//     -.-`
//     ;
//     message.channel.send(msg).then(m => m.react('🥰'))
//        message.delete({ timeout: 5000 })
//     .then(msg => console.log(`Deleted message from ${msg.author.username} after 0 seconds`))
//     .catch(console.error);
//     },
// };