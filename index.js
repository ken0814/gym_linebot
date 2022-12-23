import 'dotenv/config'
import linebot from 'linebot'
import people from './controllers/peopleInfo.js'
import activity from './controllers/activityInfo.js'
// import menu from './controllers/richMenu.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async (event) => {
  if (event.message.text === '目前人流') people.fetch(event)
  else if (event.message.text === '當前活動') activity.fetch(event)
  else if (event.message.text.includes('!')) activity.replyMore(event)
  else event.reply('逼..逼..機器人看無這指令')
  // menu.replyMenu()
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('server is running')
})
