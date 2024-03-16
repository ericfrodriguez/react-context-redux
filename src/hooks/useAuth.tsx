import { useContext } from 'react';

import { AuthContext } from '../providers/AuthContextProvider';

export const useAuth = () => {

    const auth = useContext(AuthContext);

    if(auth === undefined) {
        throw new Error('useAuthContext must be used with AuthProvider component');
    }

    return auth;
}