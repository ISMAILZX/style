let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
     const rows = [
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/tkk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/pe"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/pe"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/tkk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/pe"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/pe"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/tkk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/pe"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/pe"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/tkk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/pe"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/pe"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/tkk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/pe"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/pe"},
        {title: 'menu', description: "https://youtube.com/c/IsmailKurama", rowId:"/okk"},
    ]
    
    const sections = [{title: "Pilih salah satu", rows: rows}]
    const button = {
        buttonText: 'Pencet ini',
        description: "Silahkan pilih kak",
        sections: sections,
        listType: 1
    }
    
    await conn.sendMessage(m.chat, button, MessageType.listMessage)
} 
handler.help = ['menu'] 
handler.tags = ['help']
handler.command = /^menu$/i
handler.owner = false
handler.mods = false
handler.premium = false

handler.private = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
