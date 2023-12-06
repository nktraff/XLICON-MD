const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "33751502097"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'senegal'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '33751502097' 
global.devs = '33751502097';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZ5ZkNScE9pMWkrRUxEWTNKV2duaUFGSitkZE40WFVQZ3lSSk1UaituUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGlPdXBIWWFETjhQTXhKS2NldEtTNGhkcjUzcHd5V2QxZlpVOXRMSFpnVT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1STBncVBhTnRhOTlCSEtqdzNUSFVzcnhCZCt0cGpUN3VxWkJad2tKaTNRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOR3JpQUx0SklTcHpONEdla01XRk82NUtaVUxoZ1RJWVpKaVZEaDFqTUdFPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNFTGxXUGREcUUxRjVVcThHdFlybDZOREF1ZDFzWStwWFM3SWdRWXdzblk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iko3QU9QWitYd2NObEwxQVVFRHYrN2hhV3lQNUZLRFpNZy9DU1MyaUlyQ2c9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKd1Z1Nm9jSzVrTzZrZXhKTXJ6T1R6bDFOTHNSaUtKYkljR2c4WEs2Tkd4bFBHSEdhK1hsOTVZNnNrdVlTcys0VzZoSFh5T2ZFb0h2T2xYak9NUEJBZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI3LCJhZHZTZWNyZXRLZXkiOiJNRjJDOTViWmhGM01HaWZVZkQ3UEdXaUNsRWc3STh3bDdPdnVoOEZQaHVNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfNVQ5M2VRdVFNZXdYNjVIMnlocHF3IiwicGhvbmVJZCI6IjA5OWVlMDYxLWFiZmYtNGE3OC04YzRiLTg0OTg2MjEwNDE0YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3ZldMamJMRjRLeElDSnJTeVhHQTBEQnA1Z0U9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxuMU1pWHQwaExBUlhJY0xJazFrUkRoK2RERT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pUZytyWUVFTzJId3FzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImtyUEpPMFRnemhPd2F0SG9SOU5xcWMwb1k3TGw5UXRJRVhoWmViTDF1U2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImU3L2tubWVPRlF5dnFpRks5RWFDdzhrMnBsbXNlNW5tZzRQU3kxc2NlNjZudjhEM1oxM3dRMjN3MGZCVUU5cGpVcU5QQ0RGM0s1Rmg3c0hRYkZvZUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTbVJSTDVqTGZiYWZ0SkFtMmMvRE9wdmJvL1A1bk1CTzJxbzNNRFpySnFNanl6TTVmc0xqU1VsKzNZcDlpQnY3K3FzZE94NldPV1RNcjV4bkhMTjNBZz09In0sIm1lIjp7ImlkIjoiMjIxNzYzOTEzMjk1OjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2h1biBVcnVtYSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjE3NjM5MTMyOTU6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaS3p5VHRFNE00VHNHclI2RWZUYXFuTktHT3k1ZlVMU0JGNFdYbXk5YmtvIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAxODcyNjIyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdDWCJ9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'nk455',
  packname:  process.env.PACK_NAME || 'shun',
   
  botname:   process.env.BOT_NAME === undefined ? "shun uruma-md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'nkzgoat' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
