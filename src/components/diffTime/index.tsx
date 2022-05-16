import { View } from '@tarojs/components'
import { getDiffTime } from '../../utils/time'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ person }) => {
  const diffTime = getDiffTime(Date.now(), person.publicTime)
  let timeDesc = diffTime.year ? `${diffTime.year} 年` : ''
  timeDesc = timeDesc || (diffTime.month ? `${diffTime.month} 月` : '')
  timeDesc = timeDesc || (diffTime.day ? `${diffTime.day} 天` : '')
  timeDesc = timeDesc || (diffTime.hour ? `${diffTime.hour} 小时` : '')
  timeDesc = timeDesc || (diffTime.minute ? `${diffTime.minute} 分钟` : '')
  timeDesc = timeDesc || (diffTime.second ? `${diffTime.second} 秒` : '')

  return <View>{timeDesc}前</View>
}
