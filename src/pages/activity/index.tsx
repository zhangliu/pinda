import React from 'react';
import Taro from '@tarojs/taro';
import Badminton, {title} from './badminton';

export default () => {
    React.useEffect(() => {
      Taro.setNavigationBarTitle({title});
    }, []);

    return <Badminton />;
};