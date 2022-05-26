import React from 'react'
import { Modal, Form, Input, TextArea, Button } from 'antd-mobile'

const show = () => {
  const content = (
    <Form
      className='pt:8 w:100%'
      footer={<Button block type='submit' color='primary'>提交</Button>}
    >
      <Form.Header><div className='d:f jc:c c:666 fw:b'>发布信息</div></Form.Header>
      {/* <Form.Item name='nickName' label='我的昵称' rules={[{ required: true }]}>
        <Input placeholder='请输入昵称'  />
      </Form.Item> */}
      <Form.Item name='phone' label='手机号码' rules={[{ required: true }]}>
        <Input placeholder='用户跟您申请后才能查看号码' />
      </Form.Item>
      <Form.Item name='desc' label='我的简介' rules={[{ required: true }]}>
        <TextArea placeholder='例如：我是一名老师，身高162，本科学历，...' />
      </Form.Item>
    </Form>
  )

  Modal.show({
    content,
    closeOnMaskClick: true,
  })
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  show,
};
