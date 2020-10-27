const Discord = require('discord.js')
const keepalive = require('./server.js')
const client = new Discord.Client()

const myID = "753561105120362588"
const botID = "770509190267142154"
const runas = "runasother"

const runasExp = new RegExp('runasother', 'gmi')

const othersMaps = [
    [/am i.*doba/gmi, "Yes"],
    [/┬─┬ ノ\( ゜-゜ノ\)/gmi, "(╯°□°）╯︵ ┻━┻"],
    [/\bhi\b|\bhey\b|\bhello\b|\bsup\b/gmi, "Hi"],
    [/\bbye\b|\bgtg\b/, "Bye!"],
    [new RegExp(`${botID}.*test`, 'gmi'), "Bot running"],
]

const myMaps = [
    [/am i.*doba/gmi, "No ofc not"],
    [new RegExp(`${botID}.*test`, 'gmi'), "Bot running"],
]

const matchOne = (content, maps) => {
    for (map of maps) {
        if (content.match(map[0])) return map[1]
    }
}

client.on('message', msg => {
    try {
        if (msg.author.id === myID) {
            if (msg.content.match(runasExp)) {
                const reply = matchOne(msg.content.substring(runas.length), othersMaps)
                if (reply) msg.reply(reply)
            } else {
                const reply = matchOne(msg.content, myMaps)
                if (reply) msg.reply(reply)
            }
        } else if (msg.author.id === botID) {
        } else {
            const reply = matchOne(msg.content, othersMaps)
            if (reply) msg.reply(reply)
        }
    } catch (e) { console.log(e) }
})

client.login()