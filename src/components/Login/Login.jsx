import React, { useContext } from 'react';
import './Login.css';
import {Link} from "react-router-dom"
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const {signIn}=useContext(AuthContext);
    const handleLogin =event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(res =>{
            const loggedUser = res.user;
            console.log(loggedUser);
            form.reset; 
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login </h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                </div>
                <input type="submit" className='btn-submit' value="LogIn" />
            </form>
            <p className=''><small>New to Ema-Jhon? <Link to="/login">SignUp</Link></small></p>
        </div>
    );
};

export default Login;