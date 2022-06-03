import { waitRun } from './runHelper'

// eslint-disable-next-line import/no-anonymous-default-export
export const getCurrentPosition = async () => {
  try {
    await waitRun(checkPermission(), 3000)
    return waitRun(getCurrentPositionByBaidu(), 5000)
  } catch(error) {
    // throw error
  }
}

const checkPermission = async () =>
  new Promise((resolve, reject) => 
    navigator.geolocation.getCurrentPosition(resolve, reject));

const getCurrentPositionByBaidu = async () => {
  const geolocation = new window.BMapGL.Geolocation();
  return new Promise((resolve, reject) => {
    geolocation.getCurrentPosition(function(res) {
      const status = this.getStatus()
      if(status === window.BMAP_STATUS_SUCCESS) return resolve(res)
      reject({ status })      
    });
  })
}