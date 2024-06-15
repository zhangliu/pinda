import { View } from '@tarojs/components';

export default ({className}) => (
    <View className={`h:100% w:100% d:f ai:c jc:c o:.6 ${className || ''}`}>Loading...</View>
)