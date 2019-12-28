exports.run = async(client, message, args) => {
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    var embed1 = new Discord.RichEmbed()
    var ichannel = client.channels.get('660473799191560204')
    if(!ichannel) {
        message.channel.send('Channel is undefined!')
        return
    }

    var suggest = args.slice(0).join(' ')
    if (!suggest) {
        message.channel.send('Укажите идею, которую хотите предложить.')
        return
    }
    embed.setTitle('Предложение')
    embed.setDescription(suggest)
    embed.setColor('RANDOM')
    embed.addField('**Автор идеи**', message.author, true)
    ichannel.send(embed)
    embed1.setDescription('**Ваша идея была успешно отправлена!**')
    embed1.setColor('006400')
    message.channel.send(embed1)
}
exports.help = {
    name: 'suggest'
}
