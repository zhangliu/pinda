
import React from 'react';
import ColorHash from 'color-hash';
import { ITouchEvent, View } from '@tarojs/components';
import { AtToast } from 'taro-ui';

import './index.scss';

interface Props {
    users: any[];
}

const LIMIT = 3
const omitType = 'omit';
let toastTimer;

export default (props: Props) => {
    const [isToastOpened, setToastIsOpened] = React.useState(false);

    const users = (props.users || []).slice(0, LIMIT);
    if ((props.users || []).length > LIMIT) {
        users[2] = {type: omitType};
    }

    const names = (props.users || []).map(user => user.nickName);
    const colorHash = new ColorHash();

    const showToast = (event: ITouchEvent) => {
        setToastIsOpened(true);
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => setToastIsOpened(false), 2000);
        event.stopPropagation();
    }

    return (
        <View className='user-list'>
            <View className='d:f ai:c' onClick={showToast}>
                {users.map((user: any, key) => {
                    const isOmitUser = user.type === omitType;
                    const textAvatar = (isOmitUser ? '···' : user.nickName.substring(0, 1)).toUpperCase();
                    const bgcColor = isOmitUser ? colorHash.hex('...') : colorHash.hex(user.nickName || '');
                    return (
                        <View
                            key={key}
                            className='w:24 h:24 br:50% fs:12 d:f ai:c jc:c c:eee ml:-6'
                            style={{backgroundColor: bgcColor}}
                        >
                            {textAvatar}
                        </View>
                    );
                })}
            </View>
            <AtToast isOpened={isToastOpened} text={names.join('; ')} duration={0} />
        </View>
    );
};
