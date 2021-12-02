module.exports = {
    name: "help",
    description: "help",
    execute: async (client, message, args, PREFIX) => {
        
    msg = 
    `I'm Voii bot
    Bot PREFIX: "."
    You can try ".ping"
    -.-
    Bot nay la cua thang Voi#2004
    Invite me: https://discord.com/api/oauth2/authorize?client_id=915813814052745297&permissions=8&scope=bot
    Request by @${message.author.username}`
    ;
    message.reply(msg)
    .then(() => console.log(`Replied to message "${message.content}"`))
    .catch(console.error);
    message.react('👌');
    
    }
}

