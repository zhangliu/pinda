import Tarojs from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'

export default () => {
  const handleClick = () => {
    Tarojs.redirectTo({ url: '/pages/acts/index' })
  }
  const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
  return (
    <AtTabs current={1} tabList={tabList} onClick={handleClick}>
      <AtTabsPane current={1} index={0} >
        <View>标签页一的内容</View>
      </AtTabsPane>
      <AtTabsPane current={1} index={0} >
        <View>标签页二的内容</View>
      </AtTabsPane>
    </AtTabs>
  )
}
