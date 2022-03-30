// Require the necessary discord.js classes
const { Client, Collection, Intents, Interaction } = require('discord.js');
const { token, guildId, clientId } = require('../config.json');

// Require other necessary modules
const fs = require('fs');
const path = require('path');

// Create path
const commandsPath = path.join(__dirname, 'commands');

// Create new client Instance
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// Client commands
client.commands = new Collection();
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

// Indicates client's logged on
client.once('ready', (c) => {
	console.log(`Logged in as ${c.user.tag}!`);
});

// Client interaction for command interaction
client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	if (!interaction.member.roles.cache.some((r) => r.id === '750712375547527248')) {
		console.log(`${interaction.member.nickname} has no perms.`);
		return await interaction.reply({
			content: 'You do not have permission to use the bot!',
			ephemeral: true,
		});
	}

	try {
		await command.execute(interaction);
	} catch (err) {
		console.error(err);
		await interaction.reply({
			content: 'There was an error while execuring this command!',
			ephemeral: true,
		});
	}
});

// Login in to Discord with client's Token
client.login(token);
