
let handler = async(m, { conn, text, participants }) => {
  let teks = `${text ? text : '🐼𝐓𝐀𝐆𝐀𝐋𝐋 𝐃𝐀𝐑𝐈 𝐀𝐃𝐌𝐈𝐍🐼'}\n\n`
		      	for (let mem of participants) {
		            teks += `@${mem.id.split('@')[0]}\n`
				}
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler


