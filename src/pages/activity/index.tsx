import React from 'react';
import Taro from '@tarojs/taro';
import Layout from './layout';
import Badminton, {title} from './badminton';

export default () => {
    React.useEffect(() => {
      Taro.setNavigationBarTitle({title});
    }, []);

    return (
      <Layout><Badminton /></Layout>
    );
};