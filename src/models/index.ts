import datas from './tmpData';

export const getActivityList = async () => {
    return { data: datas };
}

export const getActivityInfo = async ({ query: { id } }) => {
    const result = datas.find(item => +item.id === +id);
    return {
        data: {...result}
    }
}

export const applyActivity = async ({ data }) => {
    return {
        data: {
            code: 0,
            message: '报名成功',
        }
    }
}

export const unApplyActivity = async ({ data }) => {
    return {
        data: {
            code: 0,
            message: '取消成功',
        }
    }
}