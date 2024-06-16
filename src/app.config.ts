export default defineAppConfig({
  pages: [
    'pages/activity/index',
    'pages/activity/badminton/detail',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '趣拼搭',
    navigationBarTextStyle: 'black'
  },
  // tabBar: {
  //   list: [
  //     {
  //       pagePath: 'pages/index/index',
  //       text: '脱单',
  //     },
  //     {
  //       pagePath: 'pages/activity/index',
  //       text: '活动（建设中...)',
  //     }
  //   ]
  // }
})
