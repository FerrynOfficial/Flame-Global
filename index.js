const Discord = require('discord.js')
const client = new Discord.Client();
const fs = require('fs')
const ms = require('ms')
const superagent = require('superagent')
const config = require("./config.json")
client.login('NjU5MDM5ODU0ODM0NzQ1MzQ0.XgIgvg.b1Vd1L2CY4qaG6k3nUFNFYsCv9o')
client.owner = '525003205394825257';
client.on('ready', () => {
    client.user.setStatus('dnd')
    if (config.activity.streaming == true) {
        client.user.setActivity(`на ${client.guilds.size} серверах | >help`, {url: 'https://twitch.tv/username'})
    }
})
client.prefix = '>'
client.commands = new Discord.Collection();
fs.readdir('./cmds/', (err, files) => {
    if(err) console.log(err)
    let jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if(jsfiles.length <= 0) {
        console.log('No commands!')
        return
    }
    console.log(`[COMMANDS] Loaded ${files.length} commannds!`)
    jsfiles.forEach(f => {
        let props = require(`./cmds/${f}`)
        client.commands.set(props.help.name, props);
    })
})
client.on('message', message => {
    let msg = message.content.toLowerCase() || message.content.toUpperCase()
    if(!msg.startsWith(client.prefix)) return;
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
let command = args.shift().toLowerCase();
    let cmd;
    if(client.commands.has(command)) {
        cmd = client.commands.get(command)
    }
    if(!cmd) return;
    cmd.run(client, message, args)
})
