import { View } from "@tarojs/components";
import React from "react";
import { AtModal } from "taro-ui";
import { AtModalProps } from "taro-ui/types/modal";
import Toast from "../toast";

interface ModalProps extends AtModalProps {
    children: React.ReactNode;
    isOpened?: boolean;
}

export default ({children, ...props}: ModalProps) => {
    const [visible, setVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onConfirm = async (event) => {
        try {
            setVisible(false);
            setLoading(true);
            if (props?.onConfirm) await props?.onConfirm?.(event);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View className="my-modal">
            <AtModal
                cancelText='取消'
                confirmText='确认'
                {...props}
                isOpened={visible}
                onCancel={() => setVisible(false)}
                onClose={() => setVisible(false)}
                onConfirm={onConfirm}
            />
            <Toast duration={0} isOpened={loading} status="loading" />
            <View onClick={() => setVisible(true)}>{children}</View>
        </View>
    )
}