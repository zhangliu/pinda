import React from 'react';
// import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

export default (props) => {
  React.useEffect(() => {
    (async () => {
    })()
  }, []);

  return (
    <View className='bgc:f7f7f7' style={{height: '100vh'}}>
      {props.children}
    </View>
  );
};
