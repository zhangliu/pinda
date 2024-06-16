import React from 'react';
import Taro from '@tarojs/taro';
import { AtIcon } from 'taro-ui';
import { Image } from '@tarojs/components';
import Div from 'src/components/html/div';
import Button from 'src/components/button';
import DangerButton from 'src/components/button/dangerButton';
import PageLayout from 'src/components/pageLayout';
import Loading from 'src/components/loading';
import SealImg from 'src/components/sealImg';
import { ACTIVITY_STATUS_MAP } from 'src/const';
import { getActivityInfo } from 'src/models';

import Info from './info';
// import { Button, Dialog, Toast } from '@arco-design/mobile-react';
// import IconCircleChecked from '@arco-design/mobile-react/esm/icon/IconCircleChecked';
// import IconArrowIn from '@arco-design/mobile-react/esm/icon/IconArrowIn';
// import { useNavigate, useSearchParams } from '@edenx/runtime/router';
// import { getActivityInfo, applyActivity, unApplyActivity } from '@api/activity';
// import Loading from '@/components/loading';
// import copy from '@/utils/copy';
// import DangerButton from '@/components/button/dangerButton';
// import { useModel } from '@edenx/runtime/model';
// import globalModel from '@/models';
// import { ACTIVITY_STATUS_MAP, appId } from '@/const';

import ShareImg from './share.svg';
// import Info from '../info';

export default () => {
    // const [actions] = useModel(globalModel);
    // TODO
    const userInfo = {open_id: 'ou_fd664aaaf1b2172149e66bda70a75e01'};
    // const nav = useNavigate();
    const [detail, setDetail] = React.useState<any>(null);
    const params = Taro.getCurrentInstance()?.router?.params;
    const id = params?.id;

    React.useEffect(() => {
        getActivityInfo({ query: { id } }).then(res => setDetail(res.data));
    }, [id]);

    if (!detail) return <Loading className="mt:240" />;

    const isSuccess = Number(detail.status) === ACTIVITY_STATUS_MAP.SUCCESS;

    const onApply = () => {
        // Dialog.confirm({
        //     platform: 'android',
        //     children: '报名后将会通知其他玩家，并拉你进建活动群！',
        //     okText: <Div className='c:p'>确认报名</Div>,
        //     cancelText: <Div className='c:p c:666'>取消</Div>,
        //     onOk: async () => {
        //         try {
        //             if (!userInfo) return nav('/login');

        //             await applyActivity({data: { activityId: id, userInfo}});
        //             window.location.reload();
        //         } catch(error: any) {
        //             Toast.error(error?.message || '报名失败，请稍后重试');
        //         }
        //     },
        // })
    };

    const onUnApply = () => {
        // Dialog.confirm({
        //     platform: 'android',
        //     children: '确认不参加次活动么？',
        //     cancelText: <Div className='c:p c:666'>取消</Div>,
        //     okText: <Div className='c:p'>确认</Div>,
        //     onOk: async () => {
        //         try {
        //             if (!userInfo) {
        //                 return nav('/login');
        //             }

        //             await unApplyActivity({data: { activityId: id, userInfo}});
        //             window.location.reload();
        //         } catch(error: any) {
        //             Toast.error(error?.message || '取消失败，请稍后重试');
        //         }
        //     },
        // })
    }

    const hasApplied = (detail.users || []).find((item: any) => item.open_id === userInfo?.open_id);

    const renderApplyInfo = () => {
        if (!hasApplied) return null;
        return (
            <Div className='mt:10 p:12 bgc:fff fs:12 d:f ai:c'>
                <AtIcon value='check-circle' className='c:33ee33 mr:10' size='30' />
                您已报名，活动拼搭成功后，发起人会联系您加入活动群，请耐心等待。
            </Div>
        )
    }
    return (
        <PageLayout>
            <Div className='mb:20'>
                <Image className='w:100% mah:300' src={detail.img} />
                <Div className='p:12 bgc:fff p:r'>
                    {isSuccess && <SealImg title="已拼成" className="p:a r:20 zi:100 c:ee3333" />}
                    <Div className='title fw:b fs:18'>{detail.title}</Div>
                </Div>
                <Div className='mt:10 p:12 bgc:fff'>
                    <Info info={detail} />
                </Div>
                <Div className='mt:10 p:12 bgc:fff d:f jc:fe'>
                    { !hasApplied && !isSuccess && <Button onClick={onApply} className='w:30% mr:10!'>立即报名</Button> }
                    { hasApplied && <DangerButton onClick={onUnApply} className='w:30% mr:10! o:.8'>取消报名</DangerButton> }
                    <Button className='w:30%' type="secondary" openType="share" icon={ShareImg}>邀请好友</Button>
                </Div>
                {renderApplyInfo()}
                <Div className='mt:10 ml:10 fw:b o:.8'>其他活动</Div>
                <Div className='mt:4 p:12 bgc:fff d:f ai:c' >
                    <Div className='d:f ai:c fs:12 c:3333ee' onClick={() => Taro.navigateBack()}>
                        活动列表&gt;&gt;
                    </Div>
                </Div>
            </Div>
        </PageLayout>
    );
};
