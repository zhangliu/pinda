const weekdayMap = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

export const SECOND = 1000
export const MINUTE = 60 * SECOND
export const HOUR = 60 * MINUTE
export const DAY = 24 * HOUR
export const MONTH = 30 * DAY
export const YEAR = 12 * MONTH

export const getWeekday = (date: number | Date) => weekdayMap[new Date(date).getDay()];

export const getPeriodName = (date: number | Date) => {
    const hours = new Date(date).getHours();

    if (hours < 12) return '上午';
    if (hours < 18) return '下午';
    return '晚上';
};

export const getDiffTime = (sTime: number | Date, eTime: number | Date) => {
  const startTime = new Date(sTime).getTime()
  const endTime = new Date(eTime).getTime()

  let diffTime = endTime - startTime;
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
};