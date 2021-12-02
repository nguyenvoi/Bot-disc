module.exports = {
  name: "kick",
  description: "Kick the User!",
  execute: async (client, message, args, PREFIX) => {
      if(!args[0]){
          return message.channel.send(":x: Must provide a User")
          .then(()=> {
            // Delete request
            message.delete({ timeout: 5000 })
            .then(msg => console.log(`Deleted message from ${msg.author.username} after 0 seconds`))
            .catch(console.error);
          })
        };

        
        const userId = message.mentions.users.first().id;
        const userToKick = message.guild.members.cache.get(userId);
    
    
        if (!userToKick) {
          return send(":x: Invalid User")
          .then(()=> {
            // Delete request
            message.delete({ timeout: 5000 })
            .then(msg => console.log(`Deleted message from ${msg.author.username} after 0 seconds`))
            .catch(console.error);
          })
        };
    
      userToKick
        .kick({reason: "Kicked by by" + message.member.displayName})
        .then(()=> {
          return message.channel.send(":white_check_mark: User kicked succesfully")
        }).catch((err) => {
          console.log(`Error => ${err}`);
          return message.channel.send(":x: Unable to kick the user")
        });
        // Delete request
        message.delete({ timeout: 5000 })
        .then(msg => console.log(`Deleted message from ${msg.author.username} after 0 seconds`))
        .catch(console.error);
  },
};


