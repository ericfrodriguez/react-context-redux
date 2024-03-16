import { AuthAction } from "../actions/auth.actions";

export interface AuthState {
    status: 'authenticated' | 'not-authenticated' | 'checking';
    token?: string;
    user?: {
        name: string;
        email: string;
    }
}

const authReducer = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
        case 'login': {
            return {
                ...state,
                status: action.payload.status,
                token: action.payload.token,
                user: action.payload.user,
            };
        }
        case 'logout': {
            return {
                ...state,
                status: action.payload.status,
                token: action.payload.token,
                user: action.payload.user,
            };
        }
        default: {
            return state;
        }
    }
}

export default authReducer;
