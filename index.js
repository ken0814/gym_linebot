import 'dotenv/config'
import linebot from 'linebot'
import people from './controllers/peopleInfo.js'
import activity from './controllers/activityInfo.js'
import schedule from 'node-schedule'
import ubike from './controllers/ubike.js'
// import menu from './controllers/richMenu.js'

schedule.scheduleJob('0 0 * * *', () => {
  activity.fetch()
})

activity.fetch()

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async (event) => {
  if (event.message.text === '目前人數') people.fetch(event)
  else if (event.message.text === '當前活動') activity.reply(event)
  else if (event.message.text.includes('前往活動')) activity.replyMore(event)
  else if (event.message.text === 'Youbike') ubike.fetch(event)
  else if (event.message.text === '聯絡我') event.reply('請看最新消息置頂資訊，有我的連絡資訊')
  else event.reply('逼..逼..機器人看無這指令')
  // menu.replyMenu()
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('server is running')
})
