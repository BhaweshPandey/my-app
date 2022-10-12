import React from 'react'
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const history = useHistory();
  return (
    <div>
      <h2>Create Account</h2>
      <form>
        <label> First Name</label>
        <input type="text" placeholder="First Name" />
        <label> Last Name</label>
        <input type="text" placeholder="Last Name" />
        <label> User Name</label>
        <input type="text" placeholder="User Name" />
        <label> Password</label>
        <input type="text" placeholder="Password" />
        <label> Conform Password</label>
        <input type="text" placeholder="Conform Password" />
      </form>
      <button
        onClick={() => { history.push("login") }}
        className='btn'>Sign-in</button>
    </div>
  )
}

export default SignUp