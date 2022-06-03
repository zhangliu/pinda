const sleep = (timeout) => new Promise(r => setTimeout(r, timeout))

export const waitRun = (func, timeout) => new Promise((resolve, reject) => {
  func.then(resolve)
  sleep(timeout).then(() => reject(new Error(`run time out!`)))
})