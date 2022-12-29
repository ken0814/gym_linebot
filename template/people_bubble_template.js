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
                size: 'md',
                flex: 5
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
                type: 'box',
                layout: 'vertical',
                contents: [],
                height: '15px',
                width: '20%',
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
    ],
    spacing: 'sm',
    paddingAll: '13px'
  }
}
