export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/acts/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  // tabBar: {
  //   list: [
  //     {
  //       pagePath: 'pages/index/index',
  //       text: '脱单',
  //     },
  //     {
  //       pagePath: 'pages/acts/index',
  //       text: '活动（建设中...)',
  //     }
  //   ]
  // }
})
