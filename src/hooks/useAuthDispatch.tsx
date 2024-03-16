import { useContext } from 'react';

import { AuthDispatchContext } from '../providers/AuthContextProvider';

export const useAuthDispatch = () => {

    const authDispatch = useContext(AuthDispatchContext);

    if(authDispatch === undefined) {
        throw new Error('useAuthDispatch must be used with AuthProvider component');
    }

    return authDispatch;
}