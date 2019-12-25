exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var kUser = message.guild.member(message.mentions.users.first())
    if(!kUser) return message.reply('Укажите пользователя которого хотите поцеловать!')
    let embed = new Discord.RichEmbed()
    .setDescription(`**Вы поцеловали ${kUser}**!`)
    .setImage('https://media.discordapp.net/attachments/653184526356447232/659359389261758465/kissanime.gif')
    .setColor('RANDOM')
    message.channel.send(embed)
}
exports.help = {
    name: 'kiss'
}
