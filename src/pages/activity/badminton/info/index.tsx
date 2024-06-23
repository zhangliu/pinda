import dayjs from 'dayjs';
import { View } from '@tarojs/components';
// import { CountDown } from '@arco-design/mobile-react';
import { getWeekday, getPeriodName, HOUR } from 'src/utils/time';
import Countdown from 'src/components/countdown';
import UserList from 'src/components/userList/index';
import Span from 'src/components/html/span';

export default ({info, className}: any) => {
    if (!info) return null;

    const distance = (info.distance / 1000).toFixed(1);
    const startTime = info.period[0];
    const weekday = getWeekday(startTime);
    const periodName = getPeriodName(startTime);
    const startPeriod = dayjs(startTime).format('HH:mm');
    const endPeroid = dayjs(info.period[1]).format('HH:mm');
    const users = info.users || [];
    const remainNum = info.userLimit - users.length;
    const applyEndTime = new Date(startTime).getTime() - HOUR;
    const perPrice = (info.price / (info.userLimit || 1)).toFixed(1);

    return (
        <View className={`d:f fd:c fs:12 ${className}`} style={{flex: 1}}>
            <View className='describle mt:10 d:f ai:c jc:sb o:.6'>
                <View>{info.placeNo}号场地</View>
                <View>距{info.region}<Span className='ml:2'>{distance}km</Span></View>
            </View>
            <View className='describle mt:10 d:f ai:c jc:sb o:.6'>
                <View>{weekday}/{periodName}</View>
                <View>{startPeriod}<Span className='ml:2 mr:2'>~</Span>{endPeroid}</View>
            </View>
            <View className='mt:10 d:f ai:c'>
                <UserList users={users} />
                <View className='ml:4 o:.6'>
                    <Span className='ml:1 mr:1'>{users.length}</Span>人参与,
                    还差<Span className='ml:1 mr:1'>{remainNum}</Span>人
                </View>
            </View>
            <View className='mt:12 d:f ai:c jc:sb'>
                <View className='d:f ai:c fs:12'>
                    人均<View className='c:ff4142 fw:b fs:16 ml:2 mr:2'>{perPrice}</View>元
                </View>
                <View className='d:f ai:c'>
                    <Countdown startTime={Date.now()} endTime={applyEndTime} />
                </View>
            </View>
        </View>
    );
};
