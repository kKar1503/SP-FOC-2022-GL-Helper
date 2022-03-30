// Require discordjs/builders for building slash commands
const { SlashCommandBuilder } = require('@discordjs/builders');

// Require modules for generating embeds
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder().setName('ping').setDescription('Pings the bot.'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
