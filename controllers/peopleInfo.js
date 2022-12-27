import 'dotenv/config'
import axios from 'axios'
import bubble from '../template/people_bubble_template.js'

const fetch = async (event) => {
  console.log('抓取人流資訊中')
  try {
    const peoples = []
    const { data } = await axios.get(process.env.GYM_API)
    peoples.push(...data.split(','))
    console.log(peoples)
    reply(event, peoples)
  } catch (error) {
    event.reply('get error')
    console.log(error)
  }
}

const reply = (event, peoples) => {
  console.log('傳送人流資訊中')
  const placesInfo = [
    {
      name: '游泳池',
      imgURL: 'https://www.ntcslsports.com.tw/images/zone/1-2.jpg'
    },
    {
      name: '健身房',
      imgURL: 'https://www.ntcslsports.com.tw/images/zone/2-4.jpg'
    }]
  const bubbles = []
  for (const i in peoples) {
    bubble.body.contents[0].text = placesInfo[i].name
    bubble.hero.url = placesInfo[i].imgURL
    if (placesInfo[i].name === '游泳池') bubble.body.contents[1].contents[0].contents[0].text = `${peoples[i]} / 容留 250 人`
    else bubble.body.contents[1].contents[0].contents[0].text = `${peoples[i]} / 容留 90 人`
    bubbles.push(bubble)
  }
  event.reply(
    [
      {
        type: 'flex',
        altText: '目前人流',
        contents: {
          type: 'carousel',
          contents: bubbles
        }
      }
    ]
  )
}

export default {
  fetch
}
