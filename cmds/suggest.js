exports.run = async(client, message, args) => {
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    client.owner = '525003205394825257'
    var owner = client.owner

    var suggest = args.slice(0).join(' ')
    if (!suggest) {
        message.channel.send('Укажите идею, которую хотите предложить.')
        return
    }
    embed.setTitle('Идея')
    embed.setDescription(suggest)
    embed.setColor('RANDOM')
    embed.addField('Автор идеи', message.author, true)
    owner.send(embed)
}
exports.help = {
    name: 'suggest'
}
