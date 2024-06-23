const call = (funcName: string, params?: any) =>
    wx.cloud.callFunction({
        name: 'pdServer',
        data: {
            type: funcName,
        },
    })

export default {
    call,
}