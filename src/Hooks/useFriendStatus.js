// this is a custom Hook that can be reused

import {useState, useEffect} from 'react';

const useFriendStatus = (friendID) => {
    const [isOnline, setIsOnline] = useState(null);

    const handleStatusChange = (status) => {
        setIsOnline(status.isOnline);
    }

    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);

        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    });

    return isOnline;
}

export default useFriendStatus;


/*

Hooks are a way to reuse stateful logic, not state itself.

Each call to a Hook has a completely isolated state -- so you can even use the same custom Hook twice in one Component

*/

