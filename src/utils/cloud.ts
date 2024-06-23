const call = (funcName: string, params?: any) =>
    wx.cloud.callFunction({
        name: 'pdServer',
        data: {
            type: funcName,
            params,
        },
    })

export default {
    call,
}