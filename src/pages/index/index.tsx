import { useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

export default () => {
  useEffect(() => {
    Taro.redirectTo({url: '/pages/activity/index'});
  }, []);

  // 处理分享
  Taro.useShareAppMessage(res => {
    return {
      title: '拼搭子'
    }
  })
  Taro.useShareTimeline(() => {
    return {
      title: '拼搭子'
    }
  })

  return (
    // <AtTabs current={current} tabList={tabList} onClick={setCurrent}>
    //   <AtTabsPane current={current} index={0} >
        <View className='ml:32 mr:32 pt:32'>
          <View>3333444</View>
          {/* <GetUserButton title='分享' /> */}
          {/* <SinglePosts /> */}
        </View>
    //   </AtTabsPane>
    //   <AtTabsPane current={current} index={1} >
    //     <View>建设中...</View>
    //   </AtTabsPane>
    // </AtTabs>
  )
}
