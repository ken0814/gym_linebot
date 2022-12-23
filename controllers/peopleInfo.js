import 'dotenv/config'
import axios from 'axios'
import bubble from '../template/people_bubble_template.js'

const peoples = []

const fetch = async (event) => {
  try {
    const { data } = await axios.get(process.env.GYM_API)
    peoples.push(...data.split(','))
    reply(event)
  } catch (error) {
    console.log(error)
  }
}

const reply = (event) => {
  const placesInfo = ['游泳池', '健身房']
  const bubbles = []
  for (const i in peoples) {
    bubble.body.contents[0].text = placesInfo[i]
    if (placesInfo[i] === '游泳池') {
      bubble.hero.url = 'https://www.ntcslsports.com.tw/images/zone/1-2.jpg'
      bubble.body.contents[1].contents[0].contents[0].text = `${peoples[i]} / 容留 250 人`
    } else {
      bubble.hero.url = 'https://www.ntcslsports.com.tw/images/zone/2-4.jpg'
      bubble.body.contents[1].contents[0].contents[0].text = `${peoples[i]} / 容留 90 人`
    }
    bubbles.push(JSON.parse(JSON.stringify(bubble)))
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
