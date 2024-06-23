import React from 'react';
import cloud from 'src/utils/cloud';

interface User {
    openid: string;
    avatarUrl?: string;
    nickName?: string;
    gender?: number;
}

export default () => {
    const [user, setUser] = React.useState<User | null>(null);

    React.useEffect(() => {
        cloud.call('getUser').then(res => setUser(res?.result || null));
    }, []);

    const updateUser = (value) => {
        cloud.call('updateUser', value).then(res => setUser(res));
    }

    return [user, updateUser];
}