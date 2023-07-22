import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import { auth } from './basefire';
import { useNavigate } from 'react-router-dom';
export default function Login() {

  let navigate = useNavigate();
  const [userEmail, setuserEmail] = useState('')
  const [userPassword, setuserPassword] = useState('')

  const loggedInUser = event =>{
    event.preventDefault()
    auth.signInWithEmailAndPassword(userEmail,userPassword)

    .then((auth)=>{
      navigate('/')
    })

    .catch(e => alert(e.message))

  }

  const signedUser = event =>{
    event.preventDefault()
    auth.createUserWithEmailAndPassword(userEmail,userPassword)

    .then((auth)=>{
      navigate('/')
    })

    .catch(e => alert(e.message))
  }
  return (
    <div className='login'>
        <Link>
        <img className='login--logo' src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="login__logo" />
        </Link>
        <div className="login--container">
            <h1>Sign In</h1>
            <form>
                <h5>Email</h5>
                <input type="email" value={userEmail} onChange={event => setuserEmail(event.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={userPassword} onChange={event => setuserPassword(event.target.value)}/>
                <button type='submit' className='login--signInButton' onClick={loggedInUser}>Sign In</button>
                               
            </form>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <button type='submit' className='login--RegisterButton' onClick={signedUser}>Create your Amazon Account</button>
        </div>
    </div>
  )
}
