export default {
  type: 'bubble',
  size: 'micro',
  hero: {
    type: 'image',
    url: '',
    size: 'full',
    aspectMode: 'cover',
    aspectRatio: '649:426'
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: '',
        weight: 'bold',
        size: 'md',
        wrap: true
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '',
                weight: 'bold',
                wrap: true,
                color: '#545454',
                size: 'sm',
                flex: 5
              }
            ]
          }
        ]
      }
    ],
    spacing: 'sm',
    paddingAll: '13px'
  }
}
