export default {
  type: 'bubble',
  size: 'micro',
  hero: {
    type: 'image',
    url: 'https://i.imgur.com/i2pwQrB.png',
    size: 'full',
    aspectRatio: '20:13',
    aspectMode: 'cover'
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'Youbike',
        size: 'md',
        weight: 'bold'
      },
      {
        type: 'text',
        text: '',
        size: 'md',
        weight: 'bold'
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [],
            height: '15px',
            width: '',
            background: {
              type: 'linearGradient',
              angle: '90deg',
              startColor: '#f6d365',
              endColor: '#fda085'
            }
          }
        ],
        cornerRadius: '5px',
        backgroundColor: '#EEEEEE'
      }
    ]
  }
}
