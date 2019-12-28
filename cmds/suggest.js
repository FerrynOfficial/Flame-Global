exports.run = async(client, message, args) => {
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    client.owner = '525003205394825257'

    var suggest = args.slice(1).join(' ')
    if (!suggest) {
        message.channel.send('Укажите идею, которую хотите предложить.')
        return
    }
    embed.setTitle('Идея')
    embed.setDescription(suggest)
    embed.setColor('RANDOM')
    embed.addField('Автор идеи', message.author, true)
    client.owner.send(embed)
}
exports.help = {
    name: 'suggest'
}
