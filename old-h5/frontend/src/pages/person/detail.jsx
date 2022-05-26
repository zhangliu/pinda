import { Button, Card, Modal } from 'antd-mobile'
import { UserOutline } from 'antd-mobile-icons'
import { useParams } from 'react-router-dom'
import persons from '../../personData'
import DiffTime from './diffTime'
import InfoTag from './infoTag'
import qrCode from '../../assert/imgs/qrCode.jpeg'
import img7_1 from '../../assert/imgs/person/7/1.jpeg'
import img7_2 from '../../assert/imgs/person/7/2.jpeg'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const params = useParams()
  const person = persons.find(p => p.id === +params.id)
  if (!person) throw new Error('can not find person!')

  const sex = person.sex === 'boy' ? '男' : '女'

  const renderDesc = () => {
    return (
      <div>
        <div>
          <span>
            <UserOutline fontSize={14} className='mr:2' />
            <span>{person.nickName}</span>
          </span>
          <span className='o:.8 ml:10 mr:10'>|</span>
          <DiffTime person={person} />
        </div>
        <div className='mt:20'>
          {person.detail}
        </div>
        {renderPics()}
      </div>
    )
  }

  const renderPics = () => {
    if (!person.pics) return null

    if (person.id === 7) {
      return (
        <div className='pt:10'>
          <img className='w:100% mb:20' src={img7_1} alt="" />
          <img className='w:100%' src={img7_2} alt="" />
        </div>
      )
    }
  }

  const showModal = () => {
    Modal.alert({
      content: (
        <div>
          <div>请加微信：zhangliu2 进「马鞍山单身群」根据昵称「{person.nickName}」查找该{sex}士：</div>
          {/* <img className='w:100%' src={qrCode} /> */}
        </div>
      )
    })
  }

  const renderTitle = () => (
    <div className='d:f ai:c'>
      <InfoTag person={person} />
      <div className='of:h ws:n tof:e maw:320'>{person.title}</div>
    </div>
  )

  return (
    <div>
      <Card title={renderTitle()} onClick={() => {}}>
        {renderDesc()}
        <div className='mt:40 d:f jc:c'>
          <Button onClick={showModal} color='primary' className='w:60%'>联系该{sex}士</Button>
        </div>
      </Card>
    </div>
  );
}
