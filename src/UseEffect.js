// using useEffect to control side effects

import { useState, useEffect } from 'react';
import useFriendStatus from './Hooks/useFriendStatus';

const FriendStatus = (props) => {
    const isOnline = useFriendStatus(props.friend.id);

    if (isOnline === null) {
        return 'Loading...'
    }

    return isOnline ? 'Online' : 'Offline';
    
};

export default FriendStatus;

/* 

think of useEffect Hook as:
componentDidMount,
componentDidUpdate,
componentWillUnmount all combined in one function.


*/