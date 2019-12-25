exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var sUser = message.guild.member(message.mentions.users.first())
    if(!sUser) return message.reply('Укажите пользователя которого хотите шлепнуть!')
    let embed = new Discord.RichEmbed()
    .setTitle(`**Вы шлепнули ${sUser}**!`)
    .setImage('https://media.discordapp.net/attachments/653184526356447232/659355933037690910/slapanimefine.gif')
    .setColor('RANDOM')
    message.channel.send(embed)
}
exports.help = {
    name: 'slap'
}
