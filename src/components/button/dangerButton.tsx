import { View } from '@tarojs/components';
import Button, {ButtonProps} from './index';

export default ({children, className, ...props}: ButtonProps) => (
    <Button {...props} type="second" className={`${className || ''} bgc:F53F3F`}>
        <View className='c:fff'>{children}</View>
    </Button>
);