import Taro from "@tarojs/taro";

export const getUserInfo = () => {
    return new Promise((resolve, reject) => {
        Taro.getUserProfile({
            desc: '获取用户信息',
            success: (res: any) => resolve(res?.userInfo),
            fail: (res) => reject(res),
        });
    });
}