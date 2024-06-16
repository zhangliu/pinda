import React from "react";
import { View } from "@tarojs/components";
import { AtToast } from "taro-ui";
import { AtToastProps } from "taro-ui/types/toast";

import './index.scss';

export default React.forwardRef((props: AtToastProps, ref) => {
    const [toastProps, setToastProps] = React.useState({...props});

    React.useEffect(() => {
        setToastProps({...props});
    }, [JSON.stringify(props)]);

    React.useImperativeHandle(ref, () => ({
        success: (message: string) => {
            setToastProps({...toastProps, isOpened: true, status: 'success', text: message});
        },
        error: (message: string) => {
            setToastProps({...toastProps, isOpened: true, status: 'error', text: message});
        },
        hide: () => setToastProps({...toastProps, isOpened: false}),
    }))

    return (
        <View className="my-toast">
            <AtToast {...toastProps} />
        </View>
    )
});