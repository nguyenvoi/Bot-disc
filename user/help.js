const { Client, Interaction } = require("discord.js");

module.exports = {
    name: "help",
    description: "Some commands for User",
    type: "CHAT_INPUT",
    /**
     * 
     * @param {Client} client
     * @param {Interaction} interaction
     */
    // Add option
    excute: async (client, interaction) => {
        try {
            if (!interaction.isCommand())return;

            await interaction.deferReply().catch(_ => {})
        }catch (err) {
        console.log("Some things went wrong =>", err);
        }
    },
};




