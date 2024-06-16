import datas from './tmpData';

export const getActivityList = async () => {
    return { data: datas };
}

export const getActivityInfo = async ({ query: { id } }) => {
    const result = datas.find(item => +item.id === +id);
    return {
        data: result
    }
}