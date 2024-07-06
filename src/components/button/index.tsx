import React, { ReactElement } from 'react';
import { Image, View, Button } from '@tarojs/components';
import { AtButtonProps } from 'taro-ui/types/button';

export interface ButtonProps extends AtButtonProps {
    icon: ReactElement;
    children: any;
}

export default ({icon, type = 'primary', className, ...props}: Props) => (
    <Button {...props} type={type} className={`m:0 ${className || ''}`} size="small">
        <View className='d:f ai:c jc:c fs:14 pl:10 pr:10'>
            {icon && (
                <View className='d:f ai:c' style={{flexShrink: 0}}>
                    <Image className='h:14 w:14 mr:4' src={icon} />
                </View>
            )}
            <View  style={{whiteSpace: 'nowrap'}}>{props.children}</View>
        </View>
    </Button>
);