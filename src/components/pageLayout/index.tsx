import { View } from '@tarojs/components';
import useUser from 'src/hooks/useUser';
import Loading from '../loading';

export default (props) => {
  const [user] = useUser();

  if (!user) {
    return <Loading className='mt:120' />;
  }
  return (
    <View className='bgc:f7f7f7 h:100%' style={{minHeight: '100vh'}}>
      {props.children}
    </View>
  );
};
