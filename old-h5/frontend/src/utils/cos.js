import COS from 'cos-js-sdk-v5';

const DS_BUCKET = 'danshen-1312216714';
const DS_REGION = 'ap-nanjing';

// 初始化实例
const cos = new COS({
  SecretId: 'AKIDuiHbgV6RXNyMVP4UgdKmzwhFYcR0KOEv',
  SecretKey: 'Vmob8PRDl35sPhkY7RVJrAD8rMbbLuEI',
});

const get = (key) => {
  const res = cos.getObject({ Bucket: DS_BUCKET, Region: DS_REGION, Key: key })
  try {
    return JSON.parse(res)
  } catch(err) {
    return res
  }
}

const put = (key, data) => {
  const body = JSON.stringify(data)
  return cos.putObject({ Bucket: DS_BUCKET, Region: DS_REGION, Key: key, Body: body })
}

const del = key => cos.deleteObject({ Bucket: DS_BUCKET, Region: DS_REGION, Key: key })

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get,
  put,
  del,
}

export const REGISTRY = 'REGISTRY'
