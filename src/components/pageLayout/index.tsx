import { View } from '@tarojs/components';

export default (props) => {
  return (
    <View className='bgc:f7f7f7 h:100%' style={{minHeight: '100vh'}}>
      {props.children}
    </View>
  );
};
