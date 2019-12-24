exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var hUser = message.mentions.users.first()
    if(!hUser) return message.reply('Укажите пользователя!')
    let embed = new Discord.RichEmbed()
    .setTitle(`Пользователь обнял(а) ${hUser.name}!`)
    .setImage('https://tenor.com/view/hug-anime-gif-10195705')
    .setColor('RANDOM')
    message.channel.send(embed)
}
exports.help = {
    name: 'hug'
}
