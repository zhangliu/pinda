import { useState, useEffect } from 'react'
import { NoticeBar } from 'antd-mobile'
import { getCurrentPosition } from '../../utils/position'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [content, setContent] = useState('正在获取您的位置信息...')
  const [status, setStatus] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        const pos = await getCurrentPosition()
        setStatus(true)
        const { province, city, street } = pos.address
        setContent(`您的当前位置：${province}${city}${street}`)
      } catch(error) {
        setStatus(false)
        setContent(`获取位置信息失败，请确认您打开了定位服务(开启定位服务之后，您也可以看到其他人的位置信息)`)
      }
    })()
  }, [])

  if (status) return <NoticeBar content={content} color='info' />
  return <NoticeBar content={content} />
}