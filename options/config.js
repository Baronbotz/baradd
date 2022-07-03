/**
 - Created By Lexxy Official
 - Base Ori Dika Ardnt
*/

const fs = require("fs")
const chalk = require("chalk")

// Other
global.thum = fs.readFileSync("./plugins/media/image/thumb.jpg")
global.log0 = fs.readFileSync("./plugins/media/image/thumb.jpg")
global.err4r = fs.readFileSync("./plugins/media/image/thumb.jpg")
global.locimg = fs.readFileSync("./plugins/media/image/loc.jpg")
global.owner = ['6281914806147', '6281914806147']
global.numberOwner = "6281914806147"
global.group = "http://www.instagram.com/baron_store01"
global.rkyt = []
global.banUser = ['6281366679021@s.whatsapp.net']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.wlcm = ['120363043965529911@g.us','120363023112413670@g.us','19054091487-1424650263@g.us','120363022988111568@g.us']
global.gcrevoke = ['19054091487-1424650263@g.us']
global.packname = "BARON BOTZ"
global.author = "BARON"
global.sessionName = "session"
global.footer = "© Created BARON BOTZ"
global.linkgrupss = "http://www.instagram.com/baron_store01"
global.antitags = true
global.txtSewabot = "1-Hari : Rp2.000\n1 -Minggu : Rp.5.000\nPERMANEN : Rp10.000"
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    linkm: 'Linknya Mana Kak?',
    ban: 'Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner'
}
global.limitawal = {
    rakyat: "Infinity",
    free: 10
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
