// Require discordjs/builders for building slash commands
const { SlashCommandBuilder } = require('@discordjs/builders');

// Import would you rather questions
const { wouldYouRather } = require('./wouldYouRather.json');

// Ordinal module
const ordinal = require('ordinal');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wyr')
		.setDescription('Would you rather?')
		.addIntegerOption((option) => option.setName('question').setDescription('Question number for Would You Rather').setRequired(true)),
	async execute(interaction) {
		let questionNumber = interaction.options.getInteger('question');
		if (questionNumber > wouldYouRather.length) return await interaction.reply({ content: 'No such question found', ephemeral: true });
		let reply = `**__Here's our ${ordinal(questionNumber)} Would You Rather:__**
\n**Would you rather**
🔵 : ${wouldYouRather[questionNumber - 1][0]}
🔴 : ${wouldYouRather[questionNumber - 1][1]}
\nVote for your answers below!`;
		const message = await interaction.reply({ content: reply, fetchReply: true });
		message.react('🔵');
		message.react('🔴');
	},
};
