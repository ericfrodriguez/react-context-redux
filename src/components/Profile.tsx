import { useAuth } from "../hooks/useAuth"

export const Profile = () => {
    const session = useAuth();

    return (
        <div>
            <h2>Status: {session.status}</h2>
            <p>Token: {session.token || 'no-token'}</p>
            <p>Name: {session.user?.name || 'no-name'}</p>
            <p>Email: {session.user?.email || 'no-email'}</p>
        </div>
    )
}