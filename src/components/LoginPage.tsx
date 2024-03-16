import { useAuthDispatch } from "../hooks/useAuthDispatch"
import { login } from "../store/actions/auth.actions";


export const LoginPage = () => {

    const authDispatch = useAuthDispatch();

    const onLogin = () => {
        authDispatch(login({
            name: 'Eric Rodriguez',
            email: 'eric@gmail.com',
        }));
    }

    return (
        <>
            <h1>Login Page</h1>
            <button onClick={onLogin}>Login as Eric</button>
        </>
    )
}