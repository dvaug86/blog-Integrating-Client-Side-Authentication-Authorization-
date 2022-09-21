import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { apiService, TOKEN_KEY } from '../services/api-service';

const Login = (props: LoginProps) => {
  const history = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    apiService('/auth/login', 'POST', {email, password})
      .then(token => {
        localStorage.setItem(TOKEN_KEY, token)
        history('/');
      })
      .catch(() => console.log('oops!'));
  }

  return (
    <main className="container">
      <section className="row justify-content-center mt-4">
        <h1 className='d-flex justify-content-center p-2'>Log In!</h1>
        <div className="col-12 col-md-4">
          <form className="form-group border rounded shadow p-4">
            <label htmlFor="email">Email</label>
            <input className='form-control mb-2' value={email} onChange={e => setEmail(e.target.value)} type='email' autoComplete='email' />
            <label htmlFor="password">Password</label>
            <input className='form-control mb-2' value={password} onChange={e => setPassword(e.target.value)} type='password' autoComplete='current-password'/>
            <div className="d-flex justify-content-between">
            <button onClick={handleLogin} className='btn btn-primary'>Login</button>
            <Link to="/register"><button className='btn btn-primary'>New User</button></Link>
          
        
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

interface LoginProps { }

export default Login;