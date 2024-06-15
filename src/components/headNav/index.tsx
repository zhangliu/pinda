import React from 'react';
import { NavBar } from '@arco-design/mobile-react';
import { useNavigate } from '@edenx/runtime/router';
import IconHome from '@arco-design/mobile-react/esm/icon/IconHome';

import { ReactComponent as AddImg } from './add.svg';

const tabData = [
    { title: '羽毛球' },
    { title: '喝酒' },
    { title: '顺风车' },
];

export default () => {
    const nav = useNavigate();
    const [navHeight, setNavHeight] = React.useState(0);
    const navRef = React.useRef<any>();
    React.useEffect(() => {
        if (!navRef.current) return;

        setNavHeight(navRef.current.dom.offsetHeight)
    }, [navRef]);

    return (
        <div className='bgc:fff'>
            <NavBar
                ref={navRef}
                fixed={true}
                title='羽毛球拼搭子'
                hasBottomLine={true}
                leftContent={(
                    <div className='d:f ai:c' onClick={() => nav('/activity/badminton')}>
                        <IconHome className='fs:18' />
                    </div>
                )}
                // rightContent={<AddImg className='w:24' />}
            />
            {/* <Tabs
                tabs={tabData}
                type="line-divide"
                defaultActiveTab={0}
                tabBarHasDivider={false}
                renderTabBar={(TabBar) => (
                    <Sticky topOffset={navHeight}>{TabBar}</Sticky>
                )}
            /> */}
        </div>
    );
}