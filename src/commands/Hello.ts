import { BaseCommandInteraction, Client, CommandInteraction } from "discord.js";
import { waitForDebugger } from "inspector";
import { Command } from "../types/Command";

export const Hello: Command = {
    name: "hello",
    description: "Returns a greeting",
    type: "CHAT_INPUT",
    options: [
        {
            name: "content",
            description: "type ur content",
            type: "STRING",
            required: true,
            choices: [
                {
                    name: "Olaf",
                    value: "Olaf"
                },
                {
                    name: "Kevin",
                    value: "Kevin"
                }
            ]
        }
    ],
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        
        //example code
        const value = interaction.options.data[0].value
        const content = `${value} ist cool!`;

        await interaction.followUp({
            ephemeral: true,
            content: content,
        });
    }
};
