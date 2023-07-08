import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useState } from 'react';

export default function AuthPage({ setUser }) {

  const [button, setButton] = useState(false);

  async function handleChange() {
    setButton(!button)
  }

  return (
    <main>
      <h1>AuthPage</h1>
      { button ?
        <SignUpForm setUser={setUser} />
        :
        <LoginForm setUser={setUser} />
      }
        <button onClick={handleChange}>{button ? 'Login' : 'Sign Up'}</button>
    </main>
  );
}