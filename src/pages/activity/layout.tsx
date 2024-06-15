import React from 'react';
import { View } from '@tarojs/components';

export default (props) => {

  React.useEffect(() => {
    (async () => {
    })()
  }, []);

  return (
    <View>
      {props.children}
    </View>
  );
};
