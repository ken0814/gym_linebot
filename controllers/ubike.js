import axios from 'axios'
import bubble from '../template/ubike_bubble_template.js'

const fetch = async (event) => {
  try {
    const { data } = await axios.get('https://data.ntpc.gov.tw/api/datasets/71cd1490-a2df-4198-bef1-318479775e8a/csv?size=300')
    const info = [...data.replace(/"/g, '').split(',')]
    info.splice(0, 4213)
    info.splice(2)
    reply(event, info)
  } catch (error) {
    console.log(error)
    event.reply('伺服器錯誤，請稍後再試')
  }
}

const reply = (event, info) => {
  bubble.body.contents[1].text = `剩餘車輛 ${info[1]} / ${info[0]}`
  bubble.body.contents[2].contents[0].width = `${Math.ceil(info[1] / info[0] * 100)}%`
  event.reply(
    [
      {
        type: 'flex',
        altText: 'ubike 剩餘車輛',
        contents: bubble
      }
    ]
  )
}

export default {
  fetch
}
