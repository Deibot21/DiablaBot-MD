let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const pp = './storage/logos/Menu2.jpg'

let love = `╭━━━━━━━◇x◇━━━━━━━╮
┃ • *𝐋𝐎𝐕𝐄 - 𝐃𝐈𝐀𝐁𝐋𝐀-𝐁𝐎𝐓* 💖
┣━━━━━━━◇x◇━━━━━━━╯
┃ ┌─────⊱◈◈◈⊰─────
┃ ┃🚩 𝐍𝐨𝐦𝐛𝐫𝐞: ${name}
┃ ┃💞 𝐀𝐦𝐨𝐫 𝐏𝐨𝐫 𝐓𝐢 𝐄𝐬: *${Math.floor(Math.random() * 100)}%* De *100%*
┃ └─────⊱◈◈◈⊰─────
╰━━━━━━━◇x◇━━━━━━━╯

❤️ Hay Amor, ¿debes pedirle matrimonio?`

conn.sendMessage(m.chat, {text: love, mentions: [m.sender]}, {quoted: m})

//conn.reply(m.chat, `*🚩 Error Del Sistema*`, m, fake, )

}
handler.help = ['love']
handler.tags = ['juegos']
handler.command = /^(love|amor|Love)$/i

handler.register = true

export default handler
