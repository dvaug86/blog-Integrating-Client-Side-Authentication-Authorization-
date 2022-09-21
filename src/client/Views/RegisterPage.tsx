import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/api-service';

const RegisterPage: React.FC<RegisterPageProps> = (props) =>{
    
    const history = useNavigate();
    
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
    
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const token = await apiService('/auth/register', 'POST',{ email, password})
        localStorage.setItem('token', token);
        history('/');
     }
    
    
    return(
        <main className="container">
      <section className="row justify-content-center mt-4">
        <h1 className='d-flex justify-content-center p-2'>Register New User</h1>
        <div className="col-12 col-md-4">
          <form className="form-group border rounded shadow p-4">
          
            
            <label htmlFor="email">Email</label>
            <input className='form-control mb-2' value={email} onChange={e => setEmail(e.target.value)} type='email' autoComplete='email' />
            
            <label htmlFor="password">Password</label>
            <input className='form-control mb-2' value={password} onChange={e => setPassword(e.target.value)} type='password' autoComplete='current-password'/>
            
            <button onClick={handleSubmit} className='btn btn-primary'>Register!</button>
          </form>
        </div>
      </section>
    </main>
    )
}

interface RegisterPageProps {}

export default RegisterPage;