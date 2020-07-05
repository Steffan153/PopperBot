const { Command } = require('discord.js-commando');

module.exports = class CatusCodeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'say',
      group: 'fun',
      memberName: 'say',
      description: 'Broadcasts a message to the channel',
      examples: ['say This message will be said by the bot, not me.'],
      args: [
        {
          key: 'msg',
          prompt: 'What do you want to say?',
          type: 'string',
        },
      ],
    });
  }

  async run(msg, x) {
    msg.say(x.msg);
  }
};
