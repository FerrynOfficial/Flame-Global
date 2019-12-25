exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var hUser = message.guild.member(message.mentions.users.first())
    if(!hUser) return message.reply('Укажите пользователя которого хотите обнять!')
    let embed = new Discord.RichEmbed()
    .setDescription(`**Вы обняли ${hUser}**!`)
    .setImage('https://cdn.discordapp.com/attachments/653184526356447232/659332731607449615/tenor_5.gif')
    .setColor('RANDOM')
    message.channel.send(embed)
}
exports.help = {
    name: 'hug'
}
