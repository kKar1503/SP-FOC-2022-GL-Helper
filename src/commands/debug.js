// Require discordjs/builders for building slash commands
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder().setName('ping').setDescription('Pings the bot.'),
	async execute(interaction) {
		await interaction.reply({
			content: 'Pong!',
			ephemeral: true,
		});
	},
};
