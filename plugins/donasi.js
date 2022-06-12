let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ ➪ [083813417529]
│ ➪ [083813417529]
✞︎ ➪ 𝐝𝐨𝐧𝐚𝐬𝐢 𝐛𝐚𝐧𝐠 𝐛𝐢𝐚𝐫 𝐬𝐞𝐦𝐚𝐧𝐠𝐚𝐭 𝐧𝐠𝐞𝐛𝐨𝐭 𝐧𝐲𝐚(●’◡’●)ﾉ
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
