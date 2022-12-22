import 'dotenv/config'
import axios from 'axios'
import bubble from '../template/people_bubble_template.js'

const peoples = []

const fetch = async () => {
  try {
    const { data } = await axios.get(process.env.GYM_API)
    peoples.push(...data.split(','))
  } catch (error) {
    console.log(error)
  }
}

const reply = (event) => {
  const placesInfo = [
    {
      name: '游泳池',
      imgURL: 'https://www.ntcslsports.com.tw/images/zone/1-2.jpg'
    },
    {
      name: '健身房',
      imgURL: 'https://www.ntcslsports.com.tw/images/zone/2-4.jpg'
    }
  ]
  const bubbles = []
  for (const i in peoples) {
    bubble.hero.url = placesInfo[i].imgURL
    bubble.body.contents[0].text = placesInfo[i].name
    if (placesInfo[i].name === '游泳池') bubble.body.contents[1].contents[0].contents[0].text = `${peoples[i]} / 容留 250 人`
    else bubble.body.contents[1].contents[0].contents[0].text = `${peoples[i]} / 容留 90 人`
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
  fetch,
  reply
}
