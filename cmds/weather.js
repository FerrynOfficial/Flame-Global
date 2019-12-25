exports.run = async(client, message, args, tools) => {
    const Discord = require('discord.js')
    const weather = require('weather-js')
    var current = result[0].current
    var location = result[0].location

    weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
        if (err) message.channel.send(err)
    })
         var embed = new Discord.RichEmbed()
         .setAuthor(`Погода в ${current.observationpoint}`)
         .setThumbnail(current.imageURL)
         .setColor(0x00AE86)
         .addField('Часовой пояс',`UTC${location.timezone}`, true)
         .addField('Тип измерения',location.degreeType, true)
         .addField('Температура', `${current.temperature}°`, true)
         .addField('По ощущениям', `${current.feelslike}°`, true)
         .addField('Ветер', current.winddisplay, true)
         .addField('Влажность', `${current.humidity}%`, true)
         message.channel.send({embed})
    
    })
}
exports.help = {
    name: 'weather'
}
