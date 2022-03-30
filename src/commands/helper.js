// Require discordjs/builders for building slash commands
const { SlashCommandBuilder } = require('@discordjs/builders');

// Import helper statement
const { helperStatements } = require('./helperStatements.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Sends helper statement.')
		.addIntegerOption((option) => option.setName('statement').setDescription('Statement number for the helper lines').setRequired(true)),
	async execute(interaction) {
		let statementNumber = interaction.options.getInteger('statement');
		if (!helperStatements[statementNumber]) return await interaction.reply('Statement not found.');
		await interaction.reply(helperStatements[statementNumber]);
	},
};
