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
        size: 'md'
        // wrap: true
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
                size: 'xs',
                flex: 5
              }
            ]
          }
        ]
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
                size: 'xs',
                flex: 5
              }
            ]
          }
        ],
        height: '200px',
        maxHeight: '200px'
      },
      {
        type: 'button',
        action: {
          type: 'message',
          label: '了解更多',
          text: ''
        },
        color: '#63A7C8',
        style: 'primary',
        height: 'sm',
        margin: 'lg',
        gravity: 'bottom'
      }
    ],
    spacing: 'sm',
    paddingAll: '13px'
  }
}
