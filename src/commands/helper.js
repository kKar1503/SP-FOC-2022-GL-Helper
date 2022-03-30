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
		const message = await interaction.reply({ content: helperStatements[statementNumber], fetchReply: true });
		if (statementNumber === 3) {
			message.react('☎️');
			message.react('🖌️');
			message.react('958806929763885096');
			message.react('958806929889693736');
		}
	},
};
