import { View } from '@tarojs/components';

export default ({ className, ...props}: any) => <View className={`d:ib ${className || ''}`} {...props} />;