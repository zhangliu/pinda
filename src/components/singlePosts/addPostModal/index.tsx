// import { View } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtButton } from "taro-ui"
import './index.scss'

export default ({ isOpened, onClose }) => {
  return (
    <AtModal isOpened={isOpened} onClose={onClose}>
      <AtModalHeader>发布我的信息</AtModalHeader>
      <AtModalContent>
        请微信加：zhangliu2，让群主「马鞍山-大柳树」帮您将信息发布上去^^
      </AtModalContent>
      <AtModalAction>
        <AtButton
          size='small'
          className='w:80% mt:20 mb:20'
          type='primary'
          onClick={onClose}
        >确定</AtButton>
      </AtModalAction>
    </AtModal>
  )
}