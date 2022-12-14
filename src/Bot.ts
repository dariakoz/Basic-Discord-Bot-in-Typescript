import * as config from "./config/config.json"
import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
import message from "./listeners/message";

console.log("Bot is starting...");

const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MEMBERS"],
});

ready(client);
interactionCreate(client);
message(client);

client.login(config.TOKEN);