import { List, Tag, Button } from 'antd-mobile'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const desc = (
    <div>
      <div>
        <span className='c:666699 o:.8'>年龄：</span>
        <span>29岁</span>
        <span className='ml:4 mr:4'>~</span>
        <span>33岁</span>
      </div>
      <div>
        <span className='c:666699 o:.8'>时间：</span>
        <span>2022-05-03 18:30</span>
        <span className='ml:4 mr:4'>~</span>
        <span>2022-05-03 18:30</span>
      </div>
      <div className='mt:4 of:h ws:n tof:e maw:320'>
        这里是描述这里是描述这里是描述里是描述这里是描述
      </div>
    </div>
  )
  return (
    <div>
      <List header='活动列表'>
        <List.Item
          onClick={() => null}
          prefix={<Tag color='success'>空</Tag>}
          description={desc}
          // extra={<Button size='mini' color='primary'>报名</Button>}
        >
          <div>
            aaaa
          </div>
        </List.Item>
      </List>
    </div>
  );
}
