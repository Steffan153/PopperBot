const { Command } = require('discord.js-commando');

module.exports = class EmojiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'babycamera',
            group: 'fun',
            memberName: 'babycamera',
            description: 'Babycamera',
            examples: ['babycamera'],
        });
    }

    async run(msg) {
        msg.say('<a:babycamera:728778838179315742>');
    }
};
