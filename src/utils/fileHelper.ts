import Taro from "@tarojs/taro"

export const downLoadFile = (url, targetPath?: string) => new Promise((resolve, reject) => {
    Taro.downloadFile({
        url,
        success: (res) => Taro.saveFile({
            tempFilePath: res.tempFilePath,
            filePath: targetPath,
            success: resolve,
        })
    });
});