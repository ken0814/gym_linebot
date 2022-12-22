export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: '',
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
        text: '',
        weight: 'bold',
        size: 'xl'
      },
      {
        type: 'box',
        layout: 'baseline',
        margin: 'md',
        contents: [
          {
            type: 'text',
            text: '',
            size: 'sm',
            color: '#545454'
          }
        ]
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'text',
            text: '',
            wrap: true
          }
        ]
      }
    ]
  }
}
