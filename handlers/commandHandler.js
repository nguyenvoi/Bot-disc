const fs = require("fs");
const ascii = require("ascii-table");

let table = new ascii("Commands")
table.setHeading("Command", "load status")



module.exports = (client) => {
    const cmdFolder = fs.readdirSync("./commands");

    cmdFolder.forEach(cmdFolder => {
        const cmdFiles = fs.readdirSync(`./commands/${cmdFolder}`).filter(f => f.endsWith(".js"));

        cmdFiles.forEach(file => {
            const command = require(`../commands/${cmdFolder}/${file}`)

            if (command.name && command.execute) {
                client.commands.set(command.name, command);
                table.addRow(file, "On")
            }else{
                table.addRow(file, "Off")
            }
        })
    })

    console.log(table.toString())
}