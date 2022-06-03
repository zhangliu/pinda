const get = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch(error) {}
}

const set = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get,
  set
}

export const PHONE = 'registry_phone'