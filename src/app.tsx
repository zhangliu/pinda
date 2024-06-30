import React from 'react';
import Taro from '@tarojs/taro';

import 'taro-ui/dist/style/index.scss';

export default (props) => {

  React.useEffect(() => {
    Taro.cloud.init({
      env: 'cloud1-6g4mzzng64a5754c',
      traceUser: true,
    });
  }, []);

  return props.children;
}
