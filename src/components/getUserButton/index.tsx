import Taro from '@tarojs/taro'
import { AtButton } from "taro-ui"

export default ({ title, success, fail }) => {
  const getUser = () => {
    Taro.getUserProfile({
      desc: '获取中...',
      success: res => {
        console.log(res, 'xxxxxxxxxxxx')
        success(res)
      },
      fail: error => {
        console.error(error, 'xxxxxxxxxxxxxxxx')
        fail(error)
      }
    })
  }
  return (
    <AtButton type='primary' onClick={getUser}>{title}</AtButton>
  )
}