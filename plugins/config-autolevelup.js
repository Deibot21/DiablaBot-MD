import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    //user.role = global.rpg.role(user.level).name
    if (before !== user.level) {
        m.reply(`╭─╮─᤻─᳒─᤻᳒「░⃟⃜🍭ꪳ۫₎۬۟〬𝙰𝚄𝚃𝙾𝙻𝙴𝚅𝙴𝙻𝚄𝙿 ░⃟⃜🐾⁩」        
├• 
├❥  *🍧 𝒇𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆𝒔 𝒔𝒖𝒃𝒊𝒔𝒕𝒆 𝒈𝒂𝒚 𝒅𝒆 𝒏𝒊𝒗𝒆𝒍 🌸*
├❥ᰰຼ  *𝙽𝙸𝚅𝙴𝙻 𝙰𝙽𝚃𝙴𝚁𝙸𝙾𝚁 : ${before}* 
├❥ᰰຼ  *𝙽𝚄𝙴𝚅𝙾 𝙽𝙸𝚅𝙴𝙻 : ${user.level}*
├❥ᰰຼ  *𝚁𝙰𝙽𝙶𝙾 : ${user.role}*
├❥ᰰຼ  *𝙵𝙴𝙲𝙷𝙰 : ${new Date().toLocaleString('id-ID')}*
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`.trim())
    }
} 

