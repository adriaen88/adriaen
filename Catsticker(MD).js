const { bot, getBuffer, sticker } = require('../lib/')

bot(	{pattern: 'scat ?(.*)',		fromMe: true,	desc: 'random cat sticker sending plugin',		type: 'misc' 	},async (message, match) => {let image = ["https://i.imgur.com/KaIOToQ.png","https://i.imgur.com/rNuZPzD.png","https://i.imgur.com/ypVvQUO.png","https://i.imgur.com/U02uDrL.png","https://i.imgur.com/dv6Nuxp.png","https://i.imgur.com/noCLGW9.png","https://i.imgur.com/dgVtgts.png","https://i.imgur.com/9MnIKWp.png","https://i.imgur.com/DfQZlRb.png","https://i.imgur.com/or04v54.png]
const mask = image[Math.floor(Math.random()*image.length)]

//const { buffer } = await getBuffer(mask)

await message.send(

await sticker('mask' , mask ),{quoted: message.data},'sticker')

});

//PLUGIN CRATED BY NEERAJ

//THANKS TO MASK SER

//FOLLOW ME ON INSTAGRAM neeraj_jr_007

//STICKERS ARE MADE BY POOCHAYISAM KERALA 
