import React from 'react';
import { View } from '@tarojs/components';
import pd from 'src/utils/pd';

import Toast from '../toast';

export default (props) => {
  const toastRef = React.useRef<any>();

  React.useEffect(() => {
    pd.init({ toast: toastRef.current })
  }, []);

  return (
    <View className='bgc:f7f7f7 h:100%' style={{minHeight: '100vh'}}>
      {props.children}
      <Toast ref={toastRef} />
    </View>
  );
};
