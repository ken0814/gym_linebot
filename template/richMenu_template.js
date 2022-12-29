export default {
  size: {
    width: 2500,
    height: 843
  },
  selected: true,
  name: 'LINE Developers Info',
  chatBarText: '功能選單',
  areas: [
    {
      bounds: {
        x: 0,
        y: 0,
        width: 625,
        height: 843
      },
      action: {
        type: 'message',
        label: '目前人數',
        text: '目前人數'
      }
    },
    {
      bounds: {
        x: 625,
        y: 0,
        width: 625,
        height: 843
      },
      action: {
        type: 'message',
        label: '當前活動',
        text: '當前活動'
      }
    },
    {
      bounds: {
        x: 1250,
        y: 0,
        width: 625,
        height: 843
      },
      action: {
        type: 'message',
        label: 'Youbike',
        text: 'Youbike'
      }
    },
    {
      bounds: {
        x: 1875,
        y: 0,
        width: 625,
        height: 843
      },
      action: {
        type: 'message',
        label: '聯絡我',
        text: '聯絡我'
      }
    }
  ]
}
