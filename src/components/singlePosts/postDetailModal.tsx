import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtButton, AtNoticebar } from "taro-ui"
import { isMan } from "../../utils/person"

export default ({ isOpened, onClose, post }) => {
  const sex = isMan(post) ? '男' : '女'
  return (
    <AtModal isOpened={isOpened} onClose={onClose}>
      <AtModalHeader>详细信息</AtModalHeader>
      <AtModalContent>
        {post.detail}
        <AtNoticebar className='mt:20'>
          请加微信：zhangliu2 加入「马鞍山单身群」，根据群昵称「{post.nickName}」查找该{sex}士
        </AtNoticebar>
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