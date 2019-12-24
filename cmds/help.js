exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fs = require('fs')
    const moment = require('moment')
    var funcmds = ['`coin` - Подбрасывает монетку', '`random` - Случайное число от 1 до 10', '`8ball` - Дает ответ на любой вопрос ','`iq` - Показывает ваш IQ', '`say` - Отправляет сообщение от лица бота']
    var modcmds = ['`warn` - Выдает предупреждение', '`kick` - Кикает участника', '`ban` - Банит участника', '`purge` - Очищает чат', '`mute` - Выдает мут', '`dm` - Отправляет личное сообщение участнику','`addRole` - Выдать роль участнику', '`removeRole` - Забрать роль у участника']
    var cmds = ['`avatar` - Показать аватар участника', '`ping` - Показывает пинг бота', '`poll` - Проводит голосование', '`serverinfo` - Показывает информацию о сервере', '`about` - Показывает информацию о боте', '`userinfo`- Получить информацию о участнике']
    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField('**👥Участники**', cmds, true)
    .addField('**💻Администрация**', modcmds, true)
    .addField('**🎉Развлекательное**', funcmds, true)
    .addBlankField()
    .addField("**Техническая Поддержка**","[Нажмите сюда](https://discord.gg/TszUh32)")
    .addBlankField()
    .addField("**Пригласить бота на сервер**", "[Нажмите сюда](https://discordapp.com/oauth2/authorize?client_id=659082682118045716&scope=bot&permissions=8)")
    .setFooter('В скором времени будет добавлено больше команд!')
    message.member.send(embed)
    var embed2 = new Discord.RichEmbed()
    .setDescription(' Меню помощи было выслано вам в личные сообщения')
    .setColor('RANDOM')
    message.channel.send(embed2)
    message.react('👍')
}
exports.help = {
    name: 'help'
}
