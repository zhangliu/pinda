import { Tag } from 'antd-mobile'
import { isAgent } from '../../utils/agent'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ person }) => {
  if (!isAgent(person)) return <Tag className='mr:4' color="success">个人</Tag>
  return  <Tag className='mr:4' color="warning">婚介</Tag>
}