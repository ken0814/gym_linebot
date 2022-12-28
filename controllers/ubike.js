import axios from 'axios'

const fetch = async () => {
  try {
    const { data } = await axios.get('https://data.ntpc.gov.tw/api/datasets/71cd1490-a2df-4198-bef1-318479775e8a/csv?size=300')
    const info = [...data.replace(/"/g, '').split(',')]
    info.splice(0, 4213)
    info.splice(2)
    console.log(info)
  } catch (error) {
    console.log(error)
  }
}

export default {
  fetch
}
