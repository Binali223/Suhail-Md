const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3d3daa1222d2f9c8d11a0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝚸𝚯𝐖𝚵𝚪 𝚩𝐘 𝚩𝚰𝚴 𝚫𝐋𝚰 𝚩𝚯𝚻𝐒" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348163717090";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_32_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDY3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NixcbiAgICAgICAgNTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MixcbiAgICAgICAgMjQyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY5LFxuICAgICAgICA5MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDgzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2RnEzVTRVbXpoR085MERzR0ZOZCtVL3o4TnlsTUdQRzkvLzk1UDIrcEdJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNjM3MTcwOTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZEMDlFNUM0QzUwNUQxOTRFNkNDNDM0OTUwQzkwRDA0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTg3MzEyOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4SkZUMnpZZVQyMmNPZ1p1aU1ab1BBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlhZjMwNGVkLWNlNWUtNDFiNC1hNDlkLTk3ZjgzNTE0YmUzNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDUwLFxuICAgICAgMjI4LFxuICAgICAgNDYsXG4gICAgICAxNzcsXG4gICAgICA3MyxcbiAgICAgIDUxLFxuICAgICAgNjMsXG4gICAgICAzNyxcbiAgICAgIDc5LFxuICAgICAgNCxcbiAgICAgIDE1OCxcbiAgICAgIDE5MCxcbiAgICAgIDEzOSxcbiAgICAgIDgxLFxuICAgICAgMTM5LFxuICAgICAgMTY3LFxuICAgICAgODIsXG4gICAgICA2NCxcbiAgICAgIDExMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDE0MSxcbiAgICAgIDc0LFxuICAgICAgMTQsXG4gICAgICA5MCxcbiAgICAgIDYwLFxuICAgICAgMTg2LFxuICAgICAgMTMwLFxuICAgICAgNjMsXG4gICAgICAyMDEsXG4gICAgICAxNDgsXG4gICAgICAyNTUsXG4gICAgICAyMzgsXG4gICAgICA0MixcbiAgICAgIDUwLFxuICAgICAgMTg4LFxuICAgICAgNjgsXG4gICAgICA3LFxuICAgICAgMTIyLFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVGUEoxNENGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYzNzE3MDkwOjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2aqfCdmrDwnZq08J2aq/CdkIvwnZqwXCIsXG4gICAgXCJsaWRcIjogXCIxMzE5ODQ2OTczODEwMDk6NzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlNZenZrSEVOL2NqTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyOGNHeGd4WHVJeGRVZVh3dVprWEUvSWtCbEp5bHlFN3Bxb2ptUGVmaDNRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkYvNkwvRmpha3dYSHdHS3N4TERNZE5yZVZSNFRlalJYMFc4em9yd2I2TmNjajQvNDFpSTExYThZck5xWkp4UmxkVlczdlNTcTFLenBrT1gzdTZHMkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNOWnAvNGZiRHArb09ObzdheHh3L3ZhcVIydFV0L1Bhd0phWktmcjJsVHNUTU8vWXlzZG1US3VId2NGZmF5VDBaaVNURTFsTmlFMHA2YnlFN3k5b2pRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjM3MTcwOTA6NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4NzMxMjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQYmRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBiZC5qc29uIjogIntcImtleURhdGFcIjpcIklVb0ZmbmdzNElVSEt4MERTSnVkN0NyVWJNNUxiSVRBdTlaeExOeFAxa0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEzNDA4NDY5MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTg3MzAyMTQ3OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "𝚸𝚯𝐖𝚵𝚪 𝚩𝐘 𝚩𝚰𝚴 𝚫𝐋𝚰 𝚩𝚯𝚻𝐒" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "𝐁𝐈𝐍 𝐀𝐋𝐈⁵ᵏ☹",
  botname : process.env.BOT_NAME  || "𝐘𝚯 𝚩𝚰𝚴𝚫𝐋𝚰",
  ownername:process.env.OWNER_NAME|| "𝚩𝚰𝚴𝚫𝐋𝚰",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
