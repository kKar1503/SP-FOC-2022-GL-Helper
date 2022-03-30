// Require discordjs/builders for building slash commands
const { SlashCommandBuilder } = require('@discordjs/builders');

// Require modules for generating embeds
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Sends helper statement.')
		.addIntegerOption((option) => option.setName('statement').setDescription('Statement number for the helper lines').setRequired(true)),
	async execute(interaction) {
		let statementNumber = interaction.options.getInteger('statement');
		await interaction.reply(`Helper Statement ${statementNumber}`);
	},
};
