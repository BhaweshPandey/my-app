import React, { useTransition } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
        <div className='img' />
        <div className='top'>
            <p className='p1'>Deshboard Kit</p>
            <h2>Log In To Deshboard Kit</h2>
            <p className='p3'>Enter your email and password below</p>
        </div>
        <form>
            <label> Email</label>
            <input type="text" placeholder="Email address" />
            <label> Password </label>
            <input type="text" placeholder="Password" />
        </form>
        <button className='btn'>Log In</button>
        <div className='bottom'>
            <p>Don't have an account? </p>
            <b><Link to="/signup" className='sign-up'> Sign up </Link></b>
        </div>
    </div>
  )
}

export default Login