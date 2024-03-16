import { useForm } from "react-hook-form";
import { useAuthDispatch } from "../hooks/useAuthDispatch"
import { login, logout } from "../store/actions/auth.actions";

type AuthForm = {
    email: string;
    password: string;
}

export const LoginPage = () => {

    const authDispatch = useAuthDispatch();

    const form = useForm<AuthForm>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onLogin = (data: AuthForm) => {
        authDispatch(login({
            name: 'Juan Perez',
            email: data.email,
        }));
    }

    const onLogout = () => {
        authDispatch(logout());
    }

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={form.handleSubmit(onLogin)}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <input
                        type="text"
                        placeholder="Email"
                        {...form.register('email')}
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        {...form.register('password')}
                    />
                </div>

                <div style={{ display: 'flex', gap: 10 }}>
                    <button style={{ margin: '0 auto' }} type="submit">Login</button>
                </div>
            </form>
            <button style={{ margin: '20px 0' }} onClick={onLogout}>Logout</button>
        </>
    )
}