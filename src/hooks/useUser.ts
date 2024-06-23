import React from 'react';
import cloud from 'src/utils/cloud';

let cache = null;

export default () => {
    const [user, setUser] = React.useState<any>(null);

    React.useEffect(() => {cache = user}, [user]);

    React.useEffect(() => {
        if (cache) return cache;

        cloud.call('getUser').then(res => setUser(res));
    }, []);

    const updateUser = (value) => {
        cloud.call('updateUser', value).then(res => setUser(res));
    }

    return [user, updateUser];
}