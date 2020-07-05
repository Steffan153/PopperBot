const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = class RollemCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'rollem',
            group: 'fun',
            memberName: 'rollem',
            description: 'Never gonna give you up, never gonna let you down',
            examples: ['rollem'],
            throttling: {
                usages: 1,
                duration: 10,
            },
        });
    }

    async run(msg, { question }) {
        try {
            msg.say('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        } catch (error) {
            console.error(error);
        }
    }
};
