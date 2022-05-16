import { useState } from 'react'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import SinglePosts from '../../components/singlePosts'

export default () => {
  const [current, setCurrent] = useState(0)
  const tabList = [{ title: '脱单' }, { title: '活动（建设中...）' }]

  return (
    <AtTabs current={current} tabList={tabList} onClick={setCurrent}>
      <AtTabsPane current={current} index={0} >
        <View className='ml:32 mr:32 pt:32'>
          <SinglePosts />
        </View>
      </AtTabsPane>
      <AtTabsPane current={current} index={1} >
        <View>建设中...</View>
      </AtTabsPane>
    </AtTabs>
  )
}
