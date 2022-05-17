import { View } from '@tarojs/components'
import Tarojs from '@tarojs/taro'
import { AtTag } from "taro-ui"
import DiffTime from '../diffTime'
import personData from '../../personData'

export default () => {
  const renderPost = (person, index) => {
    const title = index < 3
      ? <View className='c:ee0000 fs:32 of:h ws:n tof:e maw:600'>{person.title}</View>
      : <View className='fs:32 of:h ws:n tof:e maw:600'>{person.title}</View>
    const tag = !person.from
      ? (<AtTag size='small' type='primary' className='bgc:00b578 c:fff mr:8'>个人</AtTag>)
      : (<AtTag size='small' type='primary' className='bgc:ff8f1f c:fff mr:8'>婚介</AtTag>)

    return (
      <View className='pt:20 pb:20 bw:0 btw:1 bc:eee bs:s'>
        <View className='d:f ai:c mb:8'>
          {tag}{title}
        </View>
        <View className='mb:16 d:f ai:c fs:28'>
          <View className='c:999'>群昵称: {person.nickName}</View>
          <View className='fs:24 c:999 ml:20 mr:20'>|</View>
          <View className='c:999'><DiffTime person={person} /></View>
        </View>
        <View className='fs:28 of:h ws:n tof:e maw:640 c:999'>{person.detail}</View>
      </View>
    )
  }
  return (
    <View>
      <View className='fs:32 mb:8 c:999'>共 {personData.length} 条征友信息</View>
      {
        personData.map(renderPost)
      }
    </View>
  )
}
