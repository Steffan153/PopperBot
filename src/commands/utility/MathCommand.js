const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { evaluate } = require('mathjs');

module.exports = class CatusCodeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'math',
      group: 'utility',
      memberName: 'math',
      description: 'Executes some math with MathJS',
      examples: ['math 2 + 2 * 2'],
      args: [
        {
          key: 'math',
          prompt: 'What do you want to calculate?',
          type: 'string',
          match: 'restContent',
        },
      ],
    });
  }

  async run(msg, { math }) {
    try {
      msg.say(new MessageEmbed().setColor('#92DFF3').setTitle(evaluate(math)));
    } catch (e) {
      msg.say(new MessageEmbed().setColor('#FF9AA2').setTitle(e.message));
    }
  }
};
