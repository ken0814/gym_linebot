import 'dotenv/config'
import axios from 'axios'
import bubble from '../template/people_bubble_template.js'

const fetch = async (event) => {
  try {
    const peoples = []
    const { data } = await axios.get(process.env.GYM_API)
    peoples.push(...data.split(','))
    reply(event, peoples)
  } catch (error) {
    event.reply('伺服器錯誤，請稍後再試')
    console.log(error)
  }
}

const reply = (event, peoples) => {
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
    bubble.hero.url = placesInfo[i].imgURL
    bubble.body.contents[0].text = placesInfo[i].name
    if (placesInfo[i].name === '游泳池') {
      bubble.body.contents[1].contents[0].contents[0].text = `${peoples[i]} / 容留 250 人`
      bubble.body.contents[1].contents[1].contents[0].width = `${Math.ceil(peoples[i] / 250 * 100)}%`
    } else {
      bubble.body.contents[1].contents[0].contents[0].text = `${peoples[i]} / 容留 90 人`
      bubble.body.contents[1].contents[1].contents[0].width = `${Math.ceil(peoples[i] / 90 * 100)}%`
    }
    bubbles.push(JSON.parse(JSON.stringify(bubble)))
  }
  event.reply(
    [
      {
        type: 'flex',
        altText: '目前人數',
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
