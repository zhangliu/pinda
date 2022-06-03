import React, { useState } from 'react'
import { Modal, Form, Input, TextArea, Button, Toast } from 'antd-mobile'
import { getCurrentPosition } from '../utils/position';
import cos, { REGISTRY } from '../utils/cos';

const show = () => {
  Modal.show({
    content: <InfoForm />,
    closeOnMaskClick: true,
  })
};

const InfoForm = () => {
  const [loading, setLoading] = useState(false)

  const onFinish = async (data) => {
    try {
      setLoading(true)
      const position = await getCurrentPosition(true)
      await PostData({ ...data, position })
      Toast.show({ icon: 'success', content: `提交成功，管理员将会稍后联系您进行审核！` })
      Modal.clear()
    } catch(error) {
      Toast.show({ icon: 'fail', content: `${error.message}，请微信联系：zhangliu2 解决！` })
    } finally {
      setLoading(false)
    }
  }

  const PostData = async (data) => {
    return cos.put(`${REGISTRY}_${data.phone}`, data)
  }

  return (
    <Form
      className='pt:8 w:100%'
      onFinish={onFinish}
      footer={<Button block type='submit' loading={loading} color='primary'>提交</Button>}
    >
      <Form.Header><div className='d:f jc:c c:666 fw:b'>发布信息</div></Form.Header>
      <Form.Item name='phone' label='联系方式（微信号）' rules={[{ required: true }]}>
        <Input placeholder='用于管理员联系审核' />
      </Form.Item>
      <Form.Item name='desc' label='我的简介' rules={[{ required: true }]}>
        <TextArea placeholder='简单介绍下您的情况^^' />
      </Form.Item>
    </Form>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  show,
};
