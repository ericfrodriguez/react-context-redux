import { LoginPage } from './components/LoginPage';
import { Profile } from './components/Profile';
import { AuthContextProvider } from './providers/AuthContextProvider';

function App() {

  return (
    <AuthContextProvider>
      <main>
        <h1>Introducción a TS - React</h1>
        <LoginPage />
        <hr style={{ width: '50%', marginTop: 40, marginBottom: 40 }} />
        <Profile />
      </main>
    </AuthContextProvider>
  )
}

export default App
