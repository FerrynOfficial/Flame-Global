exports.run = async(client, message, args) => {
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    var muser = message.mentions.members.first()
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('У вас нет прав!')
    if(!muser) return message.reply('Укажите пользователя которого хотите размутить!')
    if(!muser.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.reply('Данный пользователь имеет права равные Вам!')
    if(!muser.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.reply('У меня нет прав!')
    var muterole = message.guild.roles.find(`name`, 'Muted')
    embed.setAuthor(message.author.username, message.author.avatarURL)
    embed.setDescription(`**Пользователь ${muser} был размучен!**`)
    embed.addField('**Модератор**', message.author, true)
    embed.setColor('006400')
    message.channel.send(embed)
    await muser.removeRole(muterole)
}
    exports.help = {
        name: 'unmute'
    }

