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
        width: 1250,
        height: 843
      },
      action: {
        type: 'message',
        label: '目前人流',
        text: '目前人流'
      }
    },
    {
      bounds: {
        x: 1250,
        y: 0,
        width: 1250,
        height: 843
      },
      action: {
        type: 'message',
        label: '當前活動',
        text: '當前活動'
      }
    }
  ]
}
