import { createContext, useReducer } from "react";

import authReducer, { type AuthState } from "../store/reducers/auth.reducer";
import { type AuthAction } from "../store/actions/auth.actions";

type Dispatch = (action: AuthAction) => void;

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthContext = createContext<AuthState | undefined>(undefined);
export const AuthDispatchContext = createContext<Dispatch | undefined>(undefined);

const initialState: AuthState = {
    status: 'checking',
    token: undefined,
    user: undefined,
}

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    return (
        <AuthContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider >
        </AuthContext.Provider>
    )
}