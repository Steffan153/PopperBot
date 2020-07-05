const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const urban = require('urban');

module.exports = class UrbanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'urban',
            group: 'fetch',
            memberName: 'urban',
            description: 'Searches a word in the Urban dictionary.',
            examples: ['urban popper'],
            args: [
                {
                    key: 'word',
                    prompt: 'What do you want to search Urban for?',
                    type: 'string',
                },
            ],
        });
    }

    async run(msg, { word }) {
        const old = await msg.say(
            new MessageEmbed()
                .setColor('#92DFF3')
                .setTitle('Hold on there, searching...')
        );
        urban(word).first((o) => {
            if (!o) {
                return old.edit(
                    new MessageEmbed()
                        .setColor('#FF9AA2')
                        .setTitle('An error occoured!')
                );
            }
            old.edit(
                new MessageEmbed()
                    .setColor('#B5EAD7')
                    .setURL(o.permalink)
                    .setTitle(word)
                    .addField('Definition', o.definition, true)
                    .addField('Example', o.example, true)
                    .addField('Author', o.author, true)
                    .setFooter(`👍 ${o.thumbs_up} 👎 ${o.thumbs_down}`)
            );
        });
    }
};
