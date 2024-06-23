import React from 'react';
import Taro from '@tarojs/taro';
import { AtIcon } from 'taro-ui';
import { Image } from '@tarojs/components';
import Div from 'src/components/html/div';
import Button from 'src/components/button';
import DangerButton from 'src/components/button/dangerButton';
import Modal from 'src/components/modal';
import Toast from 'src/components/toast';
import PageLayout from 'src/components/pageLayout';
import Loading from 'src/components/loading';
import SealImg from 'src/components/sealImg';
import { ACTIVITY_STATUS_MAP } from 'src/const';
import useUser from 'src/hooks/useUser';
import { getUserInfo } from 'src/utils/userHelper';
import cloud from 'src/utils/cloud';

import Info from './info';
import ShareImg from './share.svg';

export default () => {
    const toastRef = React.useRef<any>();
    const [userInfo] = useUser();
    const [detail, setDetail] = React.useState<any>(null);
    const params = Taro.getCurrentInstance()?.router?.params;
    const id = params?.id;

    const loadData = (id) => cloud.call('getActivityInfo', {id}).then(res => setDetail(res?.result));
    React.useEffect(() => {
        loadData(id);
    }, [id]);

    if (!detail) return <Loading className="mt:240" />;

    const isSuccess = Number(detail.status) === ACTIVITY_STATUS_MAP.SUCCESS;

    const hasApplied = (detail.users || []).find((item: any) => item.openid === userInfo?.openid);

    const renderApplyButton = () => {
        if (hasApplied) return null;
        if (isSuccess) return null;

        const onConfirm = async () => {
            try {
                const tmpUserInfo = await getUserInfo();
                Object.assign(userInfo!, tmpUserInfo);
                const res = await cloud.call('applyActivity', {activityId: id, userInfo});
                console.log(res, 'xxxxxxxxxxx444')
                loadData(id);
                toastRef.current?.success('报名成功！');
            } catch(error: any) {
                toastRef.current?.error(error?.message || '报名失败，请稍后重试');
            }
        }
        return (
            <Modal
                content='报名后将会通知其他玩家，并拉你进建活动群！'
                confirmText='确认报名'
                onConfirm={onConfirm}
            >
                <Button className='w:120 mr:10!'>立即报名</Button>
            </Modal>
        );
    }

    const renderUnApplyButton = () => {
        if (!hasApplied) return null;

        const onConfirm = async () => {
            try {
                cloud.call('applyActivity', { activityId: id, userInfo}).then(res => console.log(res, 'xxxxxxxxxxxxx333'));
                loadData(id);
                toastRef.current?.success('已取消！');
            } catch(error: any) {
                toastRef.current.error(error?.message || '取消失败，请稍后重试');
            }
        }
        return (
            <Modal
                content='确认不参加次活动么？'
                onConfirm={onConfirm}
            >
                <DangerButton className='w:120 mr:10! o:.8'>取消报名</DangerButton>
            </Modal>
        );
    }

    const renderApplyInfo = () => {
        if (!hasApplied) return null;
        return (
            <Div className='mt:10 p:12 bgc:fff fs:12'>
                <Div className='d:f ai:c fw:b'>
                    <AtIcon value='check-circle' className='c:33ee33 mr:4' size='16' />
                    您已报名，请微信扫码加入活动群：
                </Div>
                <Div className='d:f ai:c jc:c p:10'>
                    <Image className='w:160 h:160 bw:1 bs:s bc:eee' src={detail.groupQcode} />
                </Div>
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
                    { renderApplyButton() }
                    { renderUnApplyButton() }
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
            <Toast ref={toastRef} />
        </PageLayout>
    );
};
