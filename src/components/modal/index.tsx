import { Button, View } from "@tarojs/components";
import React from "react";
import { AtModal, AtModalAction, AtModalContent, AtModalHeader } from "taro-ui";
import { AtModalProps } from "taro-ui/types/modal";
import Toast from "../toast";

import './index.scss';

interface ModalProps extends AtModalProps {
    children: React.ReactNode;
    content: React.ReactNode | string;
    isOpened?: boolean;
}

export default ({children, ...props}: ModalProps) => {
    const [visible, setVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onConfirm = async (event) => {
        try {
            setLoading(true);
            if (props?.onConfirm) await props?.onConfirm?.(event);

            setVisible(false);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View className="my-modal">
            <AtModal isOpened={visible} onClose={() => setVisible(false)}>
                {props.title && <AtModalHeader>{props.title}</AtModalHeader>}
                <AtModalContent>{props.content}</AtModalContent>
                <AtModalAction>
                    <Button onClick={() => setVisible(false)}>{props.cancelText || '取消'}</Button>
                    <Button onClick={onConfirm}>{props.confirmText || '确定'}</Button>
                </AtModalAction>
            </AtModal>
            <Toast duration={0} isOpened={loading} status="loading" />
            <View onClick={() => setVisible(true)}>{children}</View>
        </View>
    )
}