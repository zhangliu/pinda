import React from 'react';
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui';
import Loading from 'src/components/loading';
import PageLayout from 'src/components/pageLayout';
import { ACTIVITY_STATUS_MAP } from 'src/const';
import { getActivityList } from 'src/models';

import Info from './info';

export const title = '杨浦羽毛球拼搭子';

const tabData = [
    { title: '拼搭中', key: 0, status: ACTIVITY_STATUS_MAP.IN_PROGRESS },
    { title: '已拼成', key: 1, status: ACTIVITY_STATUS_MAP.SUCCESS },
];

const Index = (): JSX.Element => {
    const [loading, setLoading] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState(0);
    const [activityList, setActivityList] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            const tabInfo = tabData.find(item => item.key === activeTab);
            try {
                setLoading(true);
                const res = await getActivityList({query: {status: `${tabInfo!.status}`}});
                setActivityList((res?.data || []) as any);
            } finally {
                setLoading(false);
            }
        })()
    }, [activeTab]);

    const renderItem = (item: any, key: string) => {
        const goDetail = () => Taro.navigateTo({url: `/pages/activity/badminton/detail?id=${item.id}`})
        return (
            <View className='d:f bw:0 bs:s bc:eee bbw:1 pb:10' key={key} onClick={goDetail}>
                <View className='left w:120 h:120 of:h d:f ai:c jc:c bgc:fff br:6'>
                    <Image className='h:100%' src={item.img} />
                </View>
                <View className='right ml:10 d:f fd:c fs:12 fw:b' style={{flex: 1}}>
                    {/* TODO */}
                    {item.title}
                    {/* <Ellipsis text={item.title} maxLine={2} className='fw:b fs:16' /> */}
                    <Info info={item} />
                </View>
            </View>
        )
    };

    const renderTabContent = () => {
      if (loading) return <Loading />;
      if (!activityList.length) return <View className='d:f ai:c jc:c o:.6'>暂无数据！</View>;
      return (
        <View>
          {activityList.map((item, key) => renderItem(item, `${key}`))}
        </View>
      )
    }

    return (
        <PageLayout>
            <AtTabs
                tabList={tabData}
                current={activeTab}
                className='mt:10 bgc:fff'
                onClick={(index) => setActiveTab(index)}
            >
            {tabData.map((_, key) => (
                <AtTabsPane className='p:16' current={activeTab} index={key} key={key}>
                    {renderTabContent()}
                </AtTabsPane>
                ))}
            </AtTabs>
        </PageLayout>
    );
};

export default Index;
