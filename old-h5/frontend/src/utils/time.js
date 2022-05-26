const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR
const MONTH = 30 * DAY
const YEAR = 12 * MONTH

export const getDiffTime = (time1, time2) => {
  const startTime = new Date(time1)
  const endTime = new Date(time2)

  let diffTime = startTime - endTime
  const diffYear = (diffTime - (diffTime % YEAR)) / YEAR

  diffTime = diffTime - diffYear * YEAR
  const diffMonth = (diffTime - (diffTime % MONTH)) / MONTH

  diffTime = diffTime - diffMonth * MONTH
  const diffDay = (diffTime - (diffTime % DAY)) / DAY

  diffTime = diffTime - diffDay * DAY
  const diffHour = (diffTime - (diffTime % HOUR)) / HOUR

  diffTime = diffTime - diffHour * HOUR
  const diffMinute = (diffTime - (diffTime % MINUTE)) / MINUTE

  diffTime = diffTime - diffMinute * MINUTE
  const diffSecond = (diffTime - (diffTime % SECOND)) / SECOND

  return {
    year: diffYear,
    month: diffMonth,
    day: diffDay,
    hour: diffHour,
    minute: diffMinute,
    second: diffSecond
  }
}