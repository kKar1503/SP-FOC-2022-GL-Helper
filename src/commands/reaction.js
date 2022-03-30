// Require discordjs/builders for building slash commands
const { SlashCommandBuilder } = require('@discordjs/builders');

// Require modules for generating embeds
const { MessageEmbed, Message } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('react')
		.setDescription('Reaction for GL Games.')
		.addIntegerOption((option) => option.setName('msgId').setDescription('ID of the message from bot.').setRequired(true)),
	async execute(interaction) {
		let msgId = interaction.options.getInteger('msgId');
		let message = interaction.channel.messages.fetch(msgId);
		console.log(message);
		await interaction.reply({
			content: 'Done!',
			ephemeral: true,
		});
	},
};
