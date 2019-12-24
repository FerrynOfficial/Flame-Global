exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var replies = ['Орёл', 'Решка']
    var result = Math.floor((Math.random() * replies.length));
    var embed = new Discord.RichEmbed()
    .addField('Вам выпал(а)',replies[result])
    .setColor('FFFF00')
    message.channel.send(embed)
}
exports.help = {
    name: 'coin'
}
