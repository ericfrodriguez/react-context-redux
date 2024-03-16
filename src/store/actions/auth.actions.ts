import { AuthState } from "../reducers/auth.reducer";

export interface AuthAction {
    type: 'login' | 'logout';
    payload: AuthState;
}

export const login = (user: AuthState['user']): AuthAction => {
    return {
        type: 'login',
        payload: {
            status: 'authenticated',
            token: 'my-jwt',
            user,
        }
    }
}

export const logout = (): AuthAction => {
    return {
        type: 'logout',
        payload: {
            status: 'not-authenticated',
            token: undefined,
            user: undefined,
        }
    }
}
