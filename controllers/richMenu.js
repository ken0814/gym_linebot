import 'dotenv/config'
import axios from 'axios'
import richMenuTemplate from '../template/richMenu_template.js'

const replyMenu = async () => {
  try {
    console.log(1234)
    const getconfig = {
      headers: {
        Authorization: `Bearer ${process.env.CHANNEL_ACCESS_TOKEN}`
      }
    }
    const postConfig = {
      headers: {
        Authorization: `Bearer ${process.env.CHANNEL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    }
    const { data } = await axios.post('https://api.line.me/v2/bot/richmenu', richMenuTemplate, postConfig)
    const confrimMenu = await axios.get('https://api.line.me/v2/bot/richmenu/list', getconfig)
    console.log(data)
    console.log(confrimMenu.data)
  } catch (error) {
    console.log(error)
  }
}

export default {
  replyMenu
}
