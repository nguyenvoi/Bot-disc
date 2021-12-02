// module.exports = (client) => {
//     console.log("MTSA-AI is online as", client.user.tag);
// };




module.exports = (client) => {
    console.log("MTSA-AI is online as", client.user.tag);
    // client.user.setActivity("all user!", {
        // client.user.setActivity(`${client.guilds.cache.size}` + " servers" + " | " + `${client.users.cache.size}` + " users",{
          client.user.setActivity(`${client.guilds.cache.size}` + " servers",{
    type: "LISTENING",
    url: "https://mtsa.xyz"
  })
};


// let activities = [ `${client.guilds.cache.size} servers`, `${client.channels.cache.size} channels`, `${client.users.cache.size} users` ], i = 0;


// + " and " + `${client.channels.cache.size}` + 



