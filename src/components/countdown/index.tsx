import { AtCountdown } from 'taro-ui';
import { getDiffTime } from 'src/utils/time';

import './index.scss';

interface Props {
    startTime: number | Date;
    endTime: number | Date;
    className?: string;
}

export default ({startTime, endTime, className}: Props) => {
    const diffTime = getDiffTime(startTime, endTime);
    return (
        <AtCountdown
            className={`countdown ${className || ''}`}
            isShowDay={diffTime.day > 0}
            isCard
            day={diffTime.day}
            hours={diffTime.hour}
            minutes={diffTime.minute}
            seconds={diffTime.second}
            format={{day: '天', hours: ':', minutes: ':', seconds: ''}}
        />
    )
}