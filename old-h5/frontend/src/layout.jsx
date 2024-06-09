import { Button, NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import singlePostModal from './components/singlePostModal'
// import qrCode from './assert/imgs/qrCode.jpeg'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const navigate = useNavigate()

  const showModal = () => {
    singlePostModal.show()
    // Modal.alert({
    //   content: (
    //     <div>
    //       <div>请进群找群主发布您的信息：</div>
    //       <img className="w:100%" src={qrCode} />
    //     </div>
    //   )
    // })
  }

  return (
    <div>
      <div className='bgc:efefef'>
        <NavBar
          onBack={() => navigate(-1)}
          right={<Button onClick={showModal} color='primary' size='mini'>发布信息</Button>}
        >
          <div onClick={() => navigate('/person')}>趣拼搭</div>
        </NavBar>
      </div>
      <div className='pt:16'>
        {props.children}
      </div>
    </div>
  )
}
