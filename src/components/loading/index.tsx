import { View } from '@tarojs/components';
import { AtActivityIndicator } from 'taro-ui';

export default ({className, size, text}) => (
    <View className={`h:100% w:100% d:f ai:c jc:c ${className || ''}`}>
        <AtActivityIndicator size={size || 32} content={text || null} />
    </View>
)