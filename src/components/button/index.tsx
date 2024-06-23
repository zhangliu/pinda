import React, { ReactElement } from 'react';
import { Image, View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { AtButtonProps } from 'taro-ui/types/button';

export interface ButtonProps extends AtButtonProps {
    icon: ReactElement;
    children: any;
}

export default ({icon, type = 'primary', className, ...props}: Props) => (
    <AtButton {...props} type={type} className={`m:0 ${className || ''}`} size="small">
        <View className='d:f ai:c jc:c fs:14 pl:10 pr:10'>
            {icon ? <Image className='h:14 w:14 mr:4' src={icon} /> : null}
            {props.children}
        </View>
    </AtButton>
);