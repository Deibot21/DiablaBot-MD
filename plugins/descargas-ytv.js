import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'

var handler = async (m, { conn, args, usedPrefix, command }) => {

if (!args[0]) return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *іᥒgrᥱsᥱ ᥙᥒ ᥱᥒᥣᥲᥴᥱ ძᥱ ᥡ᥆ᥙ𝗍ᥙᑲᥱ*\n\n[ 💡 ] ᥱȷᥱm⍴ᥣ᥆, !${command} https://youtu.be/85xI8WFMIUY`, m, fake, )
m.react(rwait)

await conn.reply(m.chat, `🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 ᥱs⍴ᥱrᥱ ᥙᥒ m᥆mᥱᥒ𝗍᥆`, m, fake, )

try {

let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
m.react(done)
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*Título*\n${ttl}\n\n*Peso*\n${size}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {

try {

let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let n4 = lolh.result.thumbnail
m.react(done)
await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `*Título*\n${n}\n\n*Peso*\n${n3}`, thumbnail: await fetch(n4) }, { quoted: m })
} catch {
await conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *᥆ᥴᥙrrі᥆́ ᥙᥒ ᥱrr᥆r*`, m, fake, )
m.react(error)}}

}
handler.help = ['ytv']
handler.tags = ['descargas']
handler.command = /^fgmp4|fgmp4|getvid|yt(v|mp4)?$/i

handler.register = true
handler.limit = true

export default handler
