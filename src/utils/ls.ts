import Taro from "@tarojs/taro";

const tryParse = (value: any, defaultValue: any) => {
    try {
        return JSON.parse(value) || defaultValue;
    } catch(error) {
        return defaultValue;
    }
}

export const getItem = (key: string, defaultValue?: any) => {
    try {
        return tryParse(Taro.getStorageSync(key), defaultValue);
    } catch(error) {
        return defaultValue;
    }
}

export const setItem = (key: string, value: any) => Taro.setStorageSync(key, JSON.stringify(value));

export default {
    getItem,
    setItem,
}