import React from 'react';
import { Input } from '@tarojs/components';
import Div from 'src/components/html/div';
import Modal from 'src/components/modal';
import ls from 'src/utils/ls';

const NICK_NAME_KEY = 'PD_NICK_NAME';

interface Props {
    children: React.ReactNode;
    onConfirm: (args: any) => Promise<void>;
}

export default (props: Props) => {
    const [nickName, setNickName] = React.useState<string>(ls.getItem(NICK_NAME_KEY) || '');
    const [error, setError] = React.useState<Error>();
    const onConfirm = () => {
        if (!nickName) {
            const error = new Error('请输入昵称');
            setError(error);
            throw error;
        }
        ls.setItem(NICK_NAME_KEY, nickName);
        props.onConfirm(nickName);
    }

    return (
        <Modal
            content={(
                <Div className="d:f fd:c ta:l">
                    请输入您报名此活动使用的昵称：
                    <Input
                        value={nickName}
                        className='bw:1 bs:s bc:eee mt:4 p:4 c:999'
                        type="nickname"
                        onInput={({detail}) => {
                            setNickName(detail.value);
                            setError(undefined);
                        }}
                    />
                    <Div className='c:ee0000 fs:10 mt:4'>{error?.message || ''}</Div>
                </Div>
            )}
            confirmText='报名'
            onConfirm={onConfirm}
        >
            {props.children}
        </Modal>
    )
}