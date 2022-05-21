import { View } from '@tarojs/components'
import { useState } from 'react'
import { AtButton, AtIcon } from "taro-ui"
import AddPostModal from './addPostModal'

export default () => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <View className='p:f b:30 r:30'>
      <AtButton
        className='h:100 w:100 br:50% d:f ai:c jc:c'
        type='primary'
        onClick={() => setIsOpened(true)}
      >
        <AtIcon value='add' className='fs:18 mb:4' />
      </AtButton>
      <AddPostModal isOpened={isOpened} onClose={() => setIsOpened(false)} />
    </View>
  )
}