import { View } from '@tarojs/components'
import { AtButton, AtIcon } from "taro-ui"

export default () => {
  const onGetPhoneNumber = ({ detail }) => {
    if (!detail) return
    if (detail.errMsg !== 'getPhoneNumber:ok') return
    
    console.log(detail, 'xxxxxxxx')
  }
  return (
    <View className='p:f b:20 r:20'>
      <AtButton
        className='h:100 w:100 br:50% d:f ai:c jc:c'
        type='primary'
        openType='getPhoneNumber'
        onGetPhoneNumber={onGetPhoneNumber}
      >
        <AtIcon value='add' className='fs:18 mb:2' />
      </AtButton>
    </View>
  )
}