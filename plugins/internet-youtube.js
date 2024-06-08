import yts from 'yt-search'

var handler = async (m, { text, conn, args, command, usedPrefix }) => {

if (!text) return conn.reply(m.chat, `🎌 *Escriba el título de algún vídeo de Youtube*\n\nEjemplo, !${command} NovaBot`, m, fake, )

let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `⬡ *Título:* ${v.title}
🌸 *𝑬𝒏𝒍𝒂𝒄𝒆́:* ${v.url}
💖 *𝑫𝒖𝒓𝒂𝒄𝒊𝒐́𝒏:* ${v.timestamp}
🌠 *𝑺𝒖𝒃𝒊𝒅𝒐:* ${v.ago}
💫 *𝑽𝒊𝒔𝒊𝒕𝒂𝒔:* ${v.views}`}}).filter(v => v).join('\n\n⁍ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩꥈ꫶࿑໋᪶݊✥---------------✥---------------ै✾⃗⌝\n\n')

conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, fkontak, m)

}
handler.help = ['ytsearch']
handler.tags = ['internet']
handler.command = /^playlist|ytbuscar|yts(earch)?$/i

handler.register = true
handler.limit = true

export default handler
      
