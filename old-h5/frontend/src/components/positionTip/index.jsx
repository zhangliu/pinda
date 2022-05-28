import { useState, useEffect } from 'react'
import { NoticeBar } from 'antd-mobile'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [content, setContent] = useState('正在获取您的位置信息...')
  const [status, setStatus] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      getCurrentPosition,
      (error) => {
        setStatus(false)
        setContent(`获取位置信息失败：${error.message}，请确认您打开了定位服务，开启定位服务之后，您也可以看到其他人的位置信息！`)
      })
  }, [])

  const getCurrentPosition = () => {
    const geolocation = new window.BMapGL.Geolocation();
    geolocation.getCurrentPosition(function(res) {
      if(this.getStatus() === window.BMAP_STATUS_SUCCESS){
        const { province, city, street } = res.address
        const { lng, lat } = res.point
        setStatus(true)
        setContent(`您的当前位置：${province}${city}${street}`)
        console.log(`经纬：${lng}，维度：${lat}`)
      }
      else {
        setStatus(false)
        setContent(`获取位置信息失败，错误码：${this.getStatus()}，请确认您打开了定位服务，开启定位服务之后，您也可以看到其他人的位置信息！`)
      }        
    });
  }

  if (status) return <NoticeBar content={content} color='info' />
  return <NoticeBar content={content} />
}