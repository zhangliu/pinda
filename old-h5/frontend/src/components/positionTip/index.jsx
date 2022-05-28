import { useState } from 'react'
import { NoticeBar } from 'antd-mobile'
import { useEffect } from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [content, setContent] = useState('正在获取您的位置信息...')
  const [status, setStatus] = useState()
  useEffect(() => {
    const geolocation = new window.BMapGL.Geolocation();
    geolocation.getCurrentPosition(function(res) {
      if(this.getStatus() === window.BMAP_STATUS_SUCCESS){
        const { province, city, street } = res.address
        const { lng, lat } = res.point
        setStatus(window.BMAP_STATUS_SUCCESS)
        setContent(`您的当前位置：${province}${city}${street}`)
        console.log(`经纬：${lng}，维度：${lat}`)
      }
      else {
        setStatus(this.getStatus())
        setContent(`获取位置信息失败，错误码：${this.getStatus()}`)
      }        
    });
  }, [])

  if (status === window.BMAP_STATUS_SUCCESS) return <NoticeBar content={content} color='info' />
  return <NoticeBar content={content} />
}