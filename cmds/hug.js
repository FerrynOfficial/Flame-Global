exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var replies = ['https://tenor.com/view/hug-cuddle-comfort-love-friends-gif-5166500','https://tenor.com/view/hug-anime-gif-10195705', 'https://tenor.com/view/hug-anime-gif-11074788']
    var result = Math.floor((Math.random() * replies.length));
    var hUser = message.mentions.users.first()
    if(!hUser) return message.reply('Укажите пользователя!')
    let embed = new Discord.RichEmbed()
    .setTitle(`Пользователь обнял(а) ${hUser}!`)
    .setImage(replies[result])
    message.channel.send(embed)
}
exports.help = {
    name: 'hug'
}
