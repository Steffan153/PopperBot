const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class CatusCodeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hex',
            group: 'utility',
            memberName: 'hex',
            description: 'Display a hex or make a random one',
            args: [
                {
                    key: 's',
                    type: 'string',
                    default: 'random',
                    prompt: '', // this is not needed as the default overrides this, but it complains if I don't put this here
                },
            ],
        });
    }

    async run(msg, { s }) {
        if (s !== 'random' && !/^([0-9a-f]{3}){1,2}$/i.test(s)) {
            return msg.say(
                new MessageEmbed()
                    .setColor('#FF9AA2')
                    .setTitle('Invalid usage. Please put a valid hex code in.')
            );
        }
        if (s === 'random') s = Math.random().toString(16).slice(2, 8);
        if (s.length === 3) s = [...s].map((x) => x + x).join('');
        return msg.say(
            new MessageEmbed()
                .setColor('#B5EAD7')
                .setTitle('#' + s)
                .setThumbnail(`https://via.placeholder.com/150/${s}?text=+`)
                .addField(
                    'RGB',
                    parseInt(s.slice(0, 2), 16) +
                        ', ' +
                        parseInt(s.slice(2, 4), 16) +
                        ', ' +
                        parseInt(s.slice(4), 16)
                )
        );
    }
};
