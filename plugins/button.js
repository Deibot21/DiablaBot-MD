let foto = imagen4
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let text = `❤️ Ese es mi propietario.`
await conn.sendButton(m.chat, text, `🧸 ¿Comó estás? ` + nombre, foto,[
['ꨄ Menú completo', '!allmenu'],
['ꨄ DiablaBot-MD', '!sc'],
['ꨄ Desarrolladores', '#owner'],
['ꨄ DiablaBot', '.bot Hola']], null, [
['ꨄ Canal Oficial', `${channel}`]], m)}
handler.customPrefix = /Enzito|Enzo/i;
handler.command = new RegExp;
export default handler;